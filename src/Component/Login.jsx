import React, { useState } from "react";

import axios from "axios";
import { useNavigate , Link } from "react-router-dom";
export default function Login (){

 const [username , setusername]=useState('');
  const [email , setemail]=useState('');
  const [password , setpassword]=useState('');
  const navigate=useNavigate()

  const handleLogin = async(e)=>{
    e.preventDefault();
    try {

      const bodyparameter = {
      
        username:username,
        email:email,
        password:password
      }

      const axiosheader = {
        headers:{
           "Accept": "application/json",
          "Content-Type": "application/json"
        }
    }

    const response = await axios.post("https://shebiz-backend.vercel.app/login" , bodyparameter , axiosheader);
    console.log(response.data);

    if(response){
    
      const token=  await response.data.token;
      const username = await response.data.user.username;
      localStorage.setItem('x-auth-token',token)
      localStorage.setItem('username',username)
  
      navigate('/')
  
     }
      
    } 
    catch (error) {
     
      console.log({"integration error" : error.message});
      
    }
   

  }
    return(
        <>
        <div className="text-4xl text-pink-900 ml-[40%] mt-10 font-poppins">
        <Link href="/">SheBizConnect</Link>
    </div>
    <div className="h-[350px] w-[400px] border border-pink-900 ml-[450px] mt-16 flex-col gap-6 rounded-lg ">
        <div className="text-3xl ml-14 text-pink-900 mt-7">
          Create Your Account!
        </div>
        
           <div className="flex-col ml-14 mt-9 ">

           <div className="mt-5" >
              <input className="border border-pink-900 w-64  bg-transparent rounded-md h-8 px-3 py-3 " type="text" placeholder="Enter Your username" onChange={(e)=>setusername(e.target.value)} />
                </div>  

              <div className="mt-5" >
              <input className="border border-pink-900 w-64 rounded-md  bg-transparent h-8 px-3 py-3 " type="email" placeholder="Enter Your Email" onChange={(e)=>setemail(e.target.value)} />
                </div>
           <div className="mt-5">
           <input className="border border-pink-900 w-64 rounded-md  bg-transparent h-8 px-3 py-3 " type="password" placeholder="Enter Your Password" onChange={(e)=>setpassword(e.target.value)} />
        
           </div>
   
            <button className="mt-5 border bg-pink-900 h-9 w-64 text-white px-5  rounded-full" onClick={handleLogin}>Login</button>
            <p className="mt-5 text-lg  text-pink-900 ml-2">Don't have an account?<Link href='/register'>Register</Link> </p>
           </div>
       


    </div>
        </>
    )
}