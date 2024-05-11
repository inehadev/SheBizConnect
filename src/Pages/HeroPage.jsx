import { Button, Flex, Heading , Text , Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import Header from "../Component/Header";
 export default function HeroPage (){
    return (
        <>
       <Header/>
        <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"} >
            <Flex   mt={"10%"} flexDirection={"column"}  justifyContent={"center"} alignItems={"center"}>
                <Heading fontSize={"xxx-large"} fontFamily={"aerial"} justifyContent={"center"} alignItems={"center"} color={"pink.900"}>Empower 💪 with SheBizConnect 🚀</Heading>
            </Flex>
            <Flex mr={7}>
                <Text fontFamily={"fonts.body"} mt={2} color={"pink.900"} fontSize={"large"}>
                <Text fontWeight="bold" as="span">SheBizConnect</Text> connects women globally, fostering collaboration,<br/>
                 empowerment, and growth. Together, we create a world where <br/>every woman's potential
                 is realized and celebrated."
                </Text>
            </Flex>
            
        </Flex>
        <Button ml={"32%"} bg={"pink.900"} fontFamily={"fonts.heading"}  mt={5}> <a href="/categories">Get Started  </a> <Icon ml={1} as={ArrowForwardIcon} boxSize={6}  /></Button>
        </>
    )
 }