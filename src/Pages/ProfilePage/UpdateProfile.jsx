import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddItem from "../../Component/item/AddItem";
import axios from "axios";


const updateProfile = ()=>{
  const [showmodal , setshowmodal]=useState(false);
  const [profiledata , setProfiledata]=useState({
    name :'',
    type:'',
    location:'',
    contact:"",
    img:null
  });
  const url=new URL(window.location.href);
  const profile= url.searchParams.get('profile')

  //// get profile data

  useEffect(()=>{

    const ProfileData =async()=>{
      try {
        const response= await axios.get(`http://localhost:4000/getprofile/${profile}`);
        console.log(response);
       setProfiledata({
        ...response.data,
        image:null
       })
      } catch (error) {
        console.log(error);
        
      }

    }
    ProfileData();

  } , [])


//// update profile

const handleUpdate =async()=>{

}
  

 
    return(
     <>
    
             <div  className="text-4xl text-pink-900 ml-[40%] mt-10 font-poppins "><Link to="/">SheBizConnect</Link></div>
           
      <div className=" ml-[28%] mt-8 border border-pink-900  rounded-md h-[500px] w-[650px]">
      <h1 className=" ml-[35%] text-2xl mt-2 font-poppins text-pink-900 ">Update Profile</h1>

      <div className="flex gap-3   mt-8 justify-evenly ml-10">
        <input className="font-poppins placeholder:text-pink-900 px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="title"  value={profiledata.title} />
      <input  className="font-poppins px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none placeholder:text-pink-900 " type="text" placeholder="type" value={profiledata.typeofp} />
      </div>
      
      <div className="flex gap-3  mt-8 justify-evenly ml-10">
        <input  className="font-poppins placeholder:text-pink-900 px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="location" value={profiledata.location} />
      <input  className="font-poppins px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none placeholder:text-pink-900 " type="tel" placeholder="contact"  />
      </div>
      
     <div className=" flex flex-col gap-8   ">
     <input  className="font-poppins  placeholder:text-pink-900 mt-8 px-3 ml-24 h-20 w-[510px] border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="file" placeholder="images" value={""} />
     <input  className="font-poppins  placeholder:text-pink-900 px-3 ml-24 h-20 w-[510px] border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="Add item" onClick={()=>setshowmodal(true)} />
     </div>
     
    <div className="mt-6 ml-24"> <button  className="font-poppins hover:bg-pink-900 hover:text-white px-3 w-[510px]  border border-pink-900 text-pink-900 bg-transparent rounded-full py-1 placeholder:items-center focus:outline-none ">Save</button></div>
      
      </div>

      {showmodal && (
        <AddItem onclose={()=>setshowmodal(false)}/>
      )}
   
    </>

      
    )
}

export default updateProfile;