import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";
import supabase from "../lib/supadb";
import { useEffect } from "react";

function Dashboard() {
  const { user } = useUser();
  const navigate = useNavigate();


  useEffect(() => {
   
    async function saveUserToSupabase() {
      if (!user) return;
      const { data: existing, error: fetchError } = await supabase
        .from("Users")
        .select("id")
        .eq("id", user.id)
        .single();

      if (existing) return; // already stored in DB

      // Step 2: If not, insert new user
      const { error } = await supabase.from("Users").insert([
        {
          id: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress, // optional
        },
      ]);

      if (error) {
        console.error("Failed to save user:", error.message);
      } else {
        console.log("✅ User saved to Supabase");
      }
    }

    saveUserToSupabase();
  }, [user]);

  return (
   <div className="w-screen min-h-screen bg-[#182035] px-4 pb-10">
     <div className="w-full flex flex-wrap items-center justify-between bg-[#00000033] py-4 px-4 rounded-md mb-6">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <img src={user.imageUrl} alt="Profile" className="w-[60px] h-[60px] mx-5 mt-1 rounded-[100%]" />
          <p className="text-4xl text-[#38bdf8] sm:text-3xl md:text-4xl font-extrabold">{user.fullName}</p>
        </div>
        <div className="mt-[10px]"><SignOutButton>
          <button className="w-32 sm:w-40 h-12 sm:h-14 bg-[#ba303c] hover:bg-red-700 text-white text-lg sm:text-xl rounded-xl transition border-2 border-[#ba303c] hover:border-red-700">Log Out</button>
          </SignOutButton></div>
      </div>
    <div>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-[#38bdf8] mb-4 text-center">StrAiVer</h1>
      <p className="text-center text-[#cbd5e1] text-[20px]">Start with brute force; optimize after you understand.</p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-80 px-4 mt-[100px]">
       <button className="border-2 border-[#00000033] h-[300px] w-[300px] text-[28px] text-white bg-[#00000033] rounded-[24px]
        hover:cursor-pointer hover:text-[#38bdf8] hover:text-[30px] my-3" onClick={()=>{navigate('/roadmap')}}>
        <div>Generate Personalized DSA Road Map</div>
       </button>
        <button className="border-2 border-[#00000033] h-[300px] w-[300px] text-[30px] text-white bg-[#00000033] rounded-[24px]
        hover:cursor-pointer hover:text-[#38bdf8] hover:text-[31px]" onClick={()=>{navigate("/practice")}}>
        <div>Practice DSA Questions</div>
       </button>
    </div>
   </div>
  );
}
export default Dashboard