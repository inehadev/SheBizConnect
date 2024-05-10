import React from "react";
import { Box , Flex , Input , Heading, Button } from "@chakra-ui/react";
export default function Login (){
    return(
        <>
        <Flex  alignItems={"center"} flexDirection={"column"} >
         <Heading mt={14} color={"pink.900"} fontFamily={"aerial"} fontSize={"40px"} >SheBizConnect</Heading>
        
         <Box mt={10}  paddingLeft="4"  border="1px " borderRadius={14} justifyContent={"center"} borderColor={"pink.900"} w={"570px"} h={"350px"} >
      <Flex justifyContent={"center"}>
         <Heading fontFamily={"aerial"}mt={2} color={"pink.900"}>Login</Heading>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"center"} gap={6} mt={5} >
      <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="text" placeholder={"Enter your username"} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="email" placeholder={"Enter your Email"} />
        <Input w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" color={"pink.900"} type="password" placeholder={"Enter your Password"} />
        <Button  w={"500px"}   borderColor="pink.900"   focusBorderColor="pink.900" bg={"pink.900"} borderRadius={24}>Login</Button>

      </Flex>
     </Box>
     </Flex>
        </>
    )
}