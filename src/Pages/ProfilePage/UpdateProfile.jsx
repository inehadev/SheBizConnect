import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddItem from "../../Component/item/AddItem";
import axios from "axios";


const updateProfile = ()=>{
  const [showmodal , setshowmodal]=useState(false);
  const [file , setfile]=useState('');
  const [image , setimage]=useState('');
  const [profiledata , setProfiledata]=useState({
    name :'',
    type:'',
    location:'',
    contact:'',
    AddGallery:null,
    profileImg:null
  });
  const url=new URL(window.location.href);
  const profile= url.searchParams.get('profile')

  //// get profile data

  useEffect(()=>{

    const ProfileData =async()=>{
      try {
        const response= await axios.get(`https://shebiz-backend.vercel.app/getprofile/${profile}`);
        console.log(response);
       setProfiledata({
        ...response.data,
        profileImg:null
       })
      } catch (error) {
        console.log(error);
        
      }

    }
    ProfileData();

  } , [])


  
const handleChange = (e) => {
  const { name, value } = e.target;
  setProfiledata((prevData) => ({
    ...prevData,
    [name]: value
  }));
};


const handleFileChange = (e) => {

  const files = Array.from(e.target.files);
  files.forEach(files=>{
    const reader= new FileReader();
    reader.readAsDataURL(files);
    reader.onloadend=()=>{
      
      setfile(oldArray => [...oldArray , reader.result]);
      console.log('File loaded:', reader.result);
    }

  })

  
};

const handleImageChange =(e)=>{
  const file = e.target.files[0];
  if(file){
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      
      setimage( reader.result);
      console.log('File loaded:', reader.result);
    }
  }
}






//// update profile
const token = localStorage.getItem('x-auth-token');
const handleUpdate =async()=>{
  try {
    const bodyparameter={

      title :profiledata.title,
      type:profiledata.typeofp,
      contact:profiledata.contact,
      location:profiledata.location,
      profileImg:Image,
      AddGallery:file

    }

    const axiosheader = {
      headers:{
          "Accept":"application/json",
          'x-auth-token':token,
      }
    }

      const response= await axios.put(`/${profile}` , bodyparameter , axiosheader);
      console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }

}



 
    return(
     <>
    
             <div  className="text-4xl text-pink-900 ml-[40%] mt-10 font-poppins "><Link to="/">SheBizConnect</Link></div>
           
      <div className=" ml-[28%] mt-8 border border-pink-900  rounded-md h-[600px] w-[650px]">
      <h1 className=" ml-[35%] text-2xl mt-2 font-poppins text-pink-900 ">Update Profile</h1>

      <div className="flex gap-3   mt-8 justify-evenly ml-10">
        <input className="font-poppins placeholder:text-pink-900 px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="title"  name="title" value={profiledata.title} onChange={handleChange} />
      <input  className="font-poppins px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none placeholder:text-pink-900 " type="text" placeholder="type" value={profiledata.typeofp} name="typeofp" onChange={handleChange} />
      </div>
      
      <div className="flex gap-3  mt-8 justify-evenly ml-10">
        <input  className="font-poppins placeholder:text-pink-900 px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="location" name="location" value={profiledata.location}  onChange={handleChange}/>
      <input  className="font-poppins px-3 border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none placeholder:text-pink-900 " type="tel" placeholder="contact"  name="contact" value={profiledata.contact} onChange={handleChange} />
      </div>
      
     <div className=" flex flex-col gap-4  ">
     <input  className="font-poppins  placeholder:text-pink-900 mt-8 px-3 ml-24 h-20 w-[510px] border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="file" placeholder="images" name="Image" onChange={handleImageChange}/>
     <input  className="font-poppins  placeholder:text-pink-900 mt-2 px-3 ml-24 h-20 w-[510px] border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="file" placeholder="Add Gallery" name="file" multiple onChange={handleFileChange}/>
     <input  className="font-poppins  placeholder:text-pink-900 px-3 ml-24 h-20 w-[510px] border border-pink-900 text-pink-900 bg-transparent rounded-sm py-1 placeholder:items-center focus:outline-none " type="text" placeholder="Add item" onClick={()=>setshowmodal(true)} />
     </div>
     
    <div className="mt-6 ml-24"> <button  className="font-poppins hover:bg-pink-900 hover:text-white px-3 w-[510px]  border border-pink-900 text-pink-900 bg-transparent rounded-full py-1 placeholder:items-center focus:outline-none " onClick={handleUpdate}>Save</button></div>
      
      </div>

      {showmodal && (
        <AddItem onclose={()=>setshowmodal(false)}/>
      )}
   
    </>

      
    )
}

export default updateProfile;