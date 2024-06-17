import { Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
import Header from "../Component/Header";
import Categories from "../Component/Categories";
import Card from "../Component/Card/Card";
import Marquee from "react-fast-marquee";

export default function HeroPage() {
    
   
    return (
        <>
            <Header />

        <div className="mt-[12%]  flex justify-center font-poppins   "  >
            <div>
                <div className="text-6xl font-medium text-pink-900  ">
                   <span className=" shadow-sm">Unlock Women's Potential,</span> 
                </div>
                <div className="text-3xl ml-14 mt-4 font-medium text-pink-900 flex gap-2 ">
                      Elevate  Your Life with <span className="text-pink-900 shadow-sm">SheBizConnect</span>
                
                 </div>
                
            </div>
 
        </div >

        <Marquee play speed={90} pauseOnHover={true}>
       <Card/>
       </Marquee>
        
        </>
    )
}