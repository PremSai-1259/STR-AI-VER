import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { SignOutButton } from "@clerk/clerk-react";
import BrainLoading from "../components/Loading";


export default function Roadmap() {
  const [prompt, setPrompt] = useState("DSA ROADMAP FOR BEGINNER");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();
  if (!user) return null;

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

  if(loading){
            return(<BrainLoading/>)
        }
  return (
    <div className="w-screen min-h-screen bg-[#182035] px-4 py-6">
       <div className="w-full flex flex-wrap items-center justify-between py-4 px-4 rounded-md mb-6 bg-[#00000033]">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <img src={user.imageUrl} alt="Profile" className="w-[60px] h-[60px] mx-5 mt-1 rounded-[100%]" />
          <p className="text-4xl text-[#38bdf8] sm:text-3xl md:text-4xl  font-extrabold">{user.fullName}</p>
          </div>
        <div className="mt-[10px]"><SignOutButton>
          <button className="w-32 sm:w-40 h-12 sm:h-14 bg-[#ba303c] hover:bg-red-700 text-white text-lg sm:text-xl rounded-xl transition border-2 border-[#ba303c] hover:border-red-700">Log Out</button>
          </SignOutButton>
        </div>
        </div>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#38bdf8] ">
        🧠 AI-Powered DSA Roadmap
      </h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="3"
        className="sm:w-[400px] sm:ml-[90px] md:w-[450px] md:ml-[180px] lg:ml-[300px] xl:ml-[500px] p-4 border border-gray-300 rounded-lg focus:ring-2 text-[#38bdf8] focus:ring-blue-500 outline-none bg-[#0f172a] resize-none"
      />
       <br></br>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`mt-4 w-full sm:w-auto md:ml-[300px] lg:ml-[430px] xl:ml-[630px] bg-[#38bdf8] hover:bg-[#00000033] text-white font-semibold py-3 px-6 rounded-lg transition ${
          loading && "cursor-not-allowed"
        }`}
      >
       Generate RoadMap 
      </button>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <div className="bg-[#00000033]">
      {roadmap && (
        <div className="w-screen mx-auto mt-8 bg-black/20 text-[#38bdf8] p-6 rounded-lg whitespace-pre-wrap">
          {roadmap}
        </div>
      )}
      </div>
    </div>
  );
}