import { useUser } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import SearchFilter from "../components/Search";
function Practice(){
    const {user} = useUser()
    const{navigate} = useNavigate()
    return(
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
        <SearchFilter/>
    </div>
    )
}

export default Practice