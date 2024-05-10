import React from "react";
import {Button , Divider, Flex ,Heading,Link , Text , Box, Input,  InputRightAddon , InputGroup} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
export default function Header (){
    return (
        <>
       
        <Flex  justifyContent={'space-between'}  >
            
        <Flex  ml = {3} alignItems={"center"}  >
         <Heading mt={4} color={"pink.900"} fontFamily={"aerial"} fontSize={"30px"} >SheBizConnect</Heading>
         </Flex>
         <Flex>
          <InputGroup>
          <Input type="text" mt={6} h={"40px"} w={"700px"}  color={"pink.900"}    borderColor="pink.900"   focusBorderColor="pink.900"
              errorBorderColor="pink.900" placeholder="Looking for a specific service?" />
              <InputRightAddon mt={6}  bg={"pink.900"}><SearchIcon h={"40px"} color={"gray"} /></InputRightAddon>  
              </InputGroup>
             
    
         </Flex>
         <Flex fontFamily={"aerial"} mt={2} mr={5} gap={3}>
         <Link> <Text  mt={4} color={"pink.900"} fontFamily={"aerial"} fontSize={"20px"}><a href ='/register'>Register </a></Text></Link>
         <Divider orientation="vertical" height="20px" borderWidth="1px" color={"black"} mt={5}/>
         <Link> <Text  mt={4} color={"pink.900"} fontFamily={"aerial"} fontSize={"20px"}><a href = {'/login'}>Login </a></Text></Link>
         </Flex>

      
         </Flex>
          <Divider bg={"black"} mt={6}/>
          </>
     
    )
}