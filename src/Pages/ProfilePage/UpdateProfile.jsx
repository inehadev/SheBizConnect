import React from "react";
import { Link } from "react-router-dom";

const updateProfile = ()=>{
    return(
     <>
    
             <div className="text-4xl text-pink-900 ml-[40%] mt-10 font-poppins "><Link to="/">SheBizConnect</Link></div>
           
      <div className=" ml-[28%] mt-8 border border-pink-900  rounded-md h-[500px] w-[650px]">
      <h1 className=" ml-[35%] text-2xl mt-2 font-poppins text-pink-900 ">Update Profile</h1>

      <div className="flex gap-3   mt-8 justify-evenly ml-10">
        <input className="font-poppins px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="title" />
      <input  className="font-poppins px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="type" />
      </div>
      
      <div className="flex gap-3  mt-8 justify-evenly ml-10">
        <input  className="font-poppins px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="location" />
      <input  className="font-poppins px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="number" placeholder="contact" />
      </div>
      
     <div className=" flex flex-col gap-8   ">
     <input  className="font-poppins  mt-8 px-3 ml-24 h-20 w-[510px] border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="file" placeholder="images" />
     <input  className="font-poppins  px-3 ml-24 h-20 w-[510px] border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="add item" />
     </div>
     
    <div className="mt-6 ml-24"> <button  className="font-poppins hover:bg-pink-900 hover:text-white px-3 w-[510px]  border border-pink-900 text-pink-900 bg-transparent rounded-full py-1 placeholder:items-center focus:outline-none ">Save</button></div>
      
      </div>
   
    </>

      
    )
}

export default updateProfile;