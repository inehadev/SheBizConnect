import { Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
import Header from "../Component/Header";
import Categories from "../Component/Categories";
export default function HeroPage() {
    return (
        <>
            <Header />

        <div className="mt-[12%]  flex justify-center font-poppins  "  >
            <div>
                <div className="text-5xl font-medium text-pink-900  ">
                   <span className="">Unlock Women's Potential,</span> 
                </div>
                <div className="text-2xl ml-14 mt-4 font-medium text-pink-900 flex gap-2 ">
                      Elevate  Your Life with <span className="text-pink-900">SheBizConnect</span>
                
                 </div>
                <div className="mt-7 ml-24"><button className="flex border shadow-md ml-24 border-pink-900 px-2 py-2 rounded-md">Get Started <FaArrowRight className="mt-1 ml-2" /></button></div>
            </div>
            {/* <div><img  className="bg-pink-900 rounded-lg opacity-50"  src="women-.png" /></div> */}
        </div >

        <Categories/>
        
        </>
    )
}