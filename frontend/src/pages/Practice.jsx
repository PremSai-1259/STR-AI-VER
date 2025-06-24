import { useUser } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
function Practice(){
    const {user} = useUser()
    const{navigate} = useNavigate()
    return(
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
    </div>
    )
}

export default Practice