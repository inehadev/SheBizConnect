import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Profile() {
  const[title , settitle]=useState('');
  const[file , setfile]=useState('');
  const[type , settype]=useState('');
  const[location,setlocation]=useState('');


  const handleChange=async()=>{
    const token = localStorage.getItem('x-auth-token');
    try {

      const bodyParameter = {
        
        title:title,
        img:file,
        type:type,
        location:location
      }

      const axiosheader = {
        headers:{
            "Accept":"application/json",
            'x-auth-token':token,
        }
    }

    const response = await axios.post('http://localhost:4000/create' , bodyParameter , axiosheader);
    console.log(response);
    
      
    } catch (error) {
      console.log({"error in create profile integration" : error});
    
    }
  }
  return (
    <>
      <div className="text-4xl text-pink-900 ml-[40%] mt-10 font-poppins">
        <Link href="/">SheBizConnect</Link>
      </div>

      <div className='border border-pink-900 w-[400px] h-[350px] justify-center ml-[35%] mt-14 rounded-md'>
      <div className="text-2xl text-pink-900 ml-[30%] mt-3 font-poppins">Create Profile</div>
        <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className='justify-center w-full h-7 px-5 focus:outline-none bg-transparent  placeholder:text-pink-900 placeholder:text-sm ' type="text" placeholder='Enter your title '
        onChange={(e)=>settitle(e.target.value)} /></div>
        <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className=' w-full px-5 focus:outline-none bg-transparent py-[2.5px] placeholder: text-sm placeholder: text-pink-900   rounded-sm ' placeholder='img' type='file'
        onChange={(e)=>setfile(e.target.files[0])} /></div>
        <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className='  w-full px-5 focus:outline-none bg-transparent py-[2.5px] placeholder:text-sm placeholder:text-pink-900   rounded-sm  ' placeholder='Type of Food' type='text'
        onChange={(e)=>settype(e.target.value)} /></div>
        <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className='  w-full px-5 focus:outline-none bg-transparent py-[2.5px] placeholder:text-sm placeholder:text-pink-900   rounded-sm  ' placeholder='Enter Your Location' type='location'
        onChange={(e)=>setlocation(e.target.value)} /></div>

         <div className='ml-8 mt-6  mr-14'>  <button className=" border bg-pink-900  w-full text-white px-4 py-1 hover:bg-transparent hover:text-pink-900 hover:border border-pink-900  rounded-full"onClick={handleChange}  >Create</button> </div>
       


      </div>


    </>
  )
}

export default Profile
