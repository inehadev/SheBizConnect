import { Flex , Box, Heading, Input, Button } from "@chakra-ui/react";
import React, { useContext , useState } from "react";
import { authContext } from "../Context/AuthContext";
export default function Register (){

  const[name, setname]=useState('');
  const [username, setusername]=useState('');
  const [email , setemail]=useState('');
  const [password , setpassword]=useState('');


  const register=useContext(authContext)
  const handleRegister  = async(e)=> {
    e.preventDefault();
    try {
      console.log("api fetched")
      await register(name , username , email , password);
    } catch (error) {
      console.log('error')
      
    }

  
  }
  return (
    <>
     <Flex  alignItems={"center"} flexDirection={"column"} >
     <Heading mt={14} color={"pink.900"} fontFamily={"aerial"} fontSize={"40px"} >SheBizConnect</Heading>
     <Box mt={10}  paddingLeft="4" border="1px " borderRadius={14} borderColor={"pink.900"} w={"570px"} h={"400px"}   >
      <Flex justifyContent={"center"}>
         <Heading fontFamily={"aerial"} mt={4} color={"pink.900"}>Register</Heading>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"center"} gap={6} mt={5} >
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="text" placeholder={"Enter your Name"} onChange={(e)=>{
          setname(e.target.value)
        }} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="text" placeholder={"Enter your username"}  onChange={(e)=>{
          setusername(e.target.value)
        }}/>
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="email" placeholder={"Enter your Email"} onChange={(e)=>{
          setemail(e.target.value)
        }} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="password" placeholder={"Enter your Password"} onChange={(e)=>{
          setpassword(e.target.value)
        }} />
        <Button  w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" bg={"pink.900"} borderRadius={24} onClick={handleRegister}>Register</Button>

      </Flex>
     </Box>
     </Flex>
    </>
  )
}