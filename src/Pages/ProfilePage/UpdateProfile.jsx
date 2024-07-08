import React from "react";
import { Link } from "react-router-dom";

const updateProfile = ()=>{
    return(
     <>
    
             <div className="text-4xl text-pink-900 ml-[40%] mt-10 font-poppins "><Link href="/">SheBizConnect</Link></div>
           
      <div className=" ml-[34%]  place-items-center mt-16 border border-pink-900 rounded-md h-[400px] w-[450px]">
      <span>Update Profile</span>
      </div>
   
    </>

      
    )
}

export default updateProfile;