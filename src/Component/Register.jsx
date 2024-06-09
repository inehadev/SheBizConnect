import { Flex , Box, Heading, Input, Button } from "@chakra-ui/react";
import React, { useContext , useState } from "react";
import { Link } from "@chakra-ui/react";
import { authContext } from "../Context/AuthContext";
import axios from "axios";
export default function Register (){

  const[name, setname]=useState('');
  const [username, setusername]=useState('');
  const [email , setemail]=useState('');
  const [password , setpassword]=useState('');


  const handleRegister  = async(e)=> {
    e.preventDefault();
   


   
      try {
          const bodyparameter ={
              name:name ,
              username:username,
              email:email,
              password:password
          
          }

          const axiosheader = {
              headers:{
                  "Accept":"application/json",
              }
          }

          const response = await axios.post('http://localhost:4000/register' ,  bodyparameter ,  axiosheader );
          console.log(response.data);
          
      } catch (error) {
          console.log(error.message)
          
      }
  

  
  }
  return (
    <>
    <div className="">
    <div className="text-4xl text-pink-900 ml-[40%] mt-10 font-poppins ">
        SheBizConnect
    </div>
    <div className="h-[400px] w-[400px] border border-pink-900 ml-[450px] mt-16 flex-col gap-6 rounded-lg ">
        <div className="text-3xl ml-14 text-pink-900 mt-7">
          Create Your Account!
        </div>
        
           <div className="flex-col ml-14 mt-9 ">
           <div className="mt-5 "><input className="border border-pink-900 px-3 py-3  h-8 rounded-md  w-64 " type="text" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)}/>
            </div>
              <div className="mt-5" >
              <input className="border border-pink-900 w-64 rounded-md h-8 px-3 py-3 " type="email" placeholder="Enter Your Email" onChange={(e)=>setemail(e.target.value)}/>
                </div>
           <div className="mt-5">
           <input className="border border-pink-900 w-64 rounded-md h-8 px-3 py-3 " type="password" placeholder="Enter Your Password" onChange={(e)=>setpassword(e.target.value)}/>
        
           </div>
   
            <button className="mt-5 border bg-pink-900 h-9 w-64 text-white px-5  rounded-full"> Register</button>
            <p className="mt-5 text-lg  text-pink-900 ml-2">Already have an account?<Link to="/login">Login</Link> </p>
           </div>
       


    </div>
    </div>
    </>
  )
}