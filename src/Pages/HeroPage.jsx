import { Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
import Header from "../Component/Header";
export default function HeroPage() {
    return (
        <>
            <Header />

        <div className="mt-[12%]  flex justify-center "  >
            <div>
                <div className="text-5xl font-medium">
                    Unlock Women's Potential,
                </div>
                <div className="text-4xl mt-4 font-medium flex gap-2">  Elevate Your Life with <span className="text-pink-900">SheBizConnect</span> </div>
                <div className="mt-4"><button className="flex border border-pink-900 px-3 py-2 rounded-md">Get Started <FaArrowRight className="mt-1 ml-2" /></button></div>
            </div>
            {/* <div><img  className="bg-pink-900 rounded-lg opacity-50"  src="women-.png" /></div> */}
        </div >
        
        </>
    )
}