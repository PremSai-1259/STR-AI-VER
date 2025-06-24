import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";

function Dashboard() {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) return null;

  return (
   <div className="w-screen h-screen bg-[#182035]">
    <div className="border-1 h-[80px] flex content-between gap-230 bg-[#00000033]">
      <div className="flex w-fit h-fit flex-row justify-center items-center ml-[30px] mt-[5px]">
      <img src={user.imageUrl} alt="Profile" className="w-[60px] h-[60px] mx-5 mt-1 rounded-[100%]" />
      <p className="text-4xl text-[#38bdf8] font-extrabold">{user.fullName}</p>
      </div>
      <div className="mt-[10px]"><SignOutButton>
          <button className="border-2 border-[#ba303c] w-[150px] h-[60px] text-white mx-[30px] text-[20px] bg-[#ba303c] rounded-2xl hover:bg-red-700 hover:border-red-700 }">Log Out</button>
        </SignOutButton></div>
    </div>
    <div>
      <h1 className="text-[100px] font-extrabold text-[#38bdf8] text-center">StrAiVer</h1>
      <p className="text-center text-[#cbd5e1] text-[20px]">Start with brute force; optimize after you understand.</p>
    </div>
    <div className="m-8 h-[400px] flex flex-row justify-center items-center content-between gap-90">
       <button className="border-2 border-[#00000033] h-[300px] w-[300px] text-[28px] text-white bg-[#00000033] rounded-[24px]
        hover:cursor-pointer hover:text-[#38bdf8] hover:text-[30px]" onClick={()=>{navigate("/roadmap")}}>
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