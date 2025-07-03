import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { SignOutButton } from "@clerk/clerk-react";
import BrainLoading from "../components/Loading";
import supabase from "../lib/supadb";



export default function Roadmap() {
  const [prompt, setPrompt] = useState("DSA ROADMAP FOR BEGINNER");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();
  if (!user) return null;


  //Generate roadmap
 const handleGenerate = async () => {
  if (!prompt.trim()) return;

  setLoading(true);
  setError("");
  setRoadmap("");

  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `Create a detailed DSA roadmap for: ${prompt}` }]
            }
          ]
        }),
      }
    );

    if (!res.ok) throw new Error("Gemini API failed");

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    setRoadmap(text || "No roadmap returned.");
  } catch (err) {
    console.error(err);
    setError(" Gemini API request failed. Please check console and .env.");
  } finally {
    setLoading(false);
  }
};

//ROADMAP TO DB
  async function post_data(){
    if(roadmap){
    const{d}= await supabase.from("Roadmaps").delete().eq("id",user.id) //to make sure only one roadmap is stored under on user id
    const{data,error}=await supabase.from("Roadmaps").insert([{
      "id":user.id,
      "roadmap":roadmap,
    }])
    if(error){
      console.log("error",error.message)
      alert("error",error.message)
    }
    else{
      alert("roadmap is stored")
    }
    }
  else{
    alert("Generate a roadmap first or get your old stored road map")
    return
    }
  }

//GET ROADMAP
async function get_roadmap(){
  const{data,error}=await supabase.from("Roadmaps").select().eq("id",user.id) //this return array of object
  if (error) {
    console.log("Fetch error", error.message);
    return;
  }

  if (data) {
    setRoadmap(data[0].roadmap); 
  } else {
    setRoadmap("No roadmap found.");
  }
}
  if(loading){
            return(<BrainLoading/>)
        }
  return (
  <div className="min-h-screen w-full bg-[#182035] px-4 py-6">
    
    <div className=" mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4 rounded-md mb-6 bg-[#00000033]">
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        <img
          src={user.imageUrl}
          alt="Profile"
          className="w-[60px] h-[60px] rounded-full"
        />
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#38bdf8]">
          {user.fullName}
        </p>
      </div>
      <SignOutButton>
        <button className="w-32 sm:w-40 h-12 bg-[#ba303c] hover:bg-red-700 text-white text-lg rounded-xl transition border-2 border-[#ba303c] hover:border-red-700">
          Log Out
        </button>
      </SignOutButton>
    </div>
    <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#38bdf8]">
      🧠 AI-Powered DSA Roadmap
    </h1>
    <div className="max-w-4xl mx-auto">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="3"
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 text-[#38bdf8] focus:ring-blue-500 outline-none bg-[#0f172a] resize-none"
        placeholder="Enter your roadmap topic"
      />
    </div>

    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full sm:w-auto bg-[#38bdf8] hover:bg-[#00000033] text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Generate New Roadmap
      </button>

      <button
        onClick={post_data}
        className="w-full sm:w-auto bg-[#38bdf8] hover:bg-[#00000033] text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Store this roadmap
      </button>

      <button
        onClick={get_roadmap}
        className="w-full sm:w-auto bg-[#38bdf8] hover:bg-[#00000033] text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Get the roadmap you stored
      </button>
    </div>

    
    {error && <p className="text-red-500 text-center mt-4">{error}</p>}

    
    {roadmap && (
      <div className="max-w-5xl mx-auto mt-8 bg-black/20 text-[#38bdf8] p-6 rounded-lg whitespace-pre-wrap">
        {roadmap}
      </div>
    )}
  </div>
);
}