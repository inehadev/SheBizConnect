import { Flex , Box, Heading, Input, Button } from "@chakra-ui/react";
import React from "react";
export default function Register (){
  return (
    <>
     <Flex  alignItems={"center"} flexDirection={"column"} >
     <Heading mt={14} color={"pink.900"} fontFamily={"aerial"} fontSize={"40px"} >SheBizConnect</Heading>
     <Box mt={10}  paddingLeft="4" border="1px " borderRadius={14} borderColor={"pink.900"} w={"570px"} h={"400px"}   >
      <Flex justifyContent={"center"}>
         <Heading fontFamily={"aerial"} mt={4} color={"pink.900"}>Register</Heading>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"center"} gap={6} mt={5} >
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="text" placeholder={"Enter your Name"} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="text" placeholder={"Enter your username"} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="email" placeholder={"Enter your Email"} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="password" placeholder={"Enter your Password"} />
        <Button  w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" bg={"pink.900"} borderRadius={24}>Register</Button>

      </Flex>
     </Box>
     </Flex>
    </>
  )
}