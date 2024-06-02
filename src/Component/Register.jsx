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
   
//  try {
//       console.log("api fetched")
//       await register(name , username , email , password);
//     } catch (error) {
//       console.log(error.message)
      
//     }

   
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
    
    </>
  )
}