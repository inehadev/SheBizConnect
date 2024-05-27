import React, { useState } from "react";
import { Link } from "@chakra-ui/react";
import axios from "axios";
import { Box , Flex , Input , Heading, Button } from "@chakra-ui/react";
export default function Login (){

  const[username , setusername]=useState('');
  const [email , setemail]=useState('');
  const [password , setpassword]=useState('');

  const handleLogin = async(e)=>{
    e.preventDefault();
    try {

      const bodyparameter = {
        username :username,
        email:email,
        password:password
      }

      const axiosheader = {
        headers:{
            "Accept":"application/json",
        }
    }
    
    const response = await axios.post("http://localhost:4000/login" ,bodyparameter , axiosheader);
    console.log(response.data);
      
    } catch (error) {
      console.log(error.message);
      
    }
   

  }
    return(
        <>
        <Flex  alignItems={"center"} flexDirection={"column"} >
         <Heading mt={14} color={"pink.900"} fontFamily={"aerial"} fontSize={"40px"} >SheBizConnect</Heading>
        
         <Box mt={10}  paddingLeft="4"  border="1px " borderRadius={14} justifyContent={"center"} borderColor={"pink.900"} w={"570px"} h={"360px"} >
      <Flex justifyContent={"center"}>
         <Heading fontFamily={"aerial"}mt={2} color={"pink.900"}>Login</Heading>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"center"} gap={6} mt={5} >
      <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="text" placeholder={"Enter your username"} onChange={(e)=>{setusername(e.target.value)}} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="email" placeholder={"Enter your Email"} onChange={(e)=>{setemail(e.target.value)}} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="password" placeholder={"Enter your Password"}  onChange={(e)=>{setpassword(e.target.value)}}/>
        <Button  w={"500px"}   borderColor="pink.900" color={"pink.900"}   border={"1px"}  bg={"white"} borderRadius={24} onClick={handleLogin}>Login</Button>
        <p  className= "text-gray-500  " >Don't have an account yet? <Link href ='/register'>Register</Link></p>

      </Flex>
     </Box>
     </Flex>
        </>
    )
}