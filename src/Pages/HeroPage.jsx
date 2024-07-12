import { Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
import Header from "../Component/Header";
import Categories from "../Component/Categories";
import Card from "../Component/Card/Card";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from 'react-router-dom'
import React from "react";

export default function HeroPage() {

    
   
    return (
        <>
            <Header />
      
        <div className="bg-[url('/girlb.png')] bg-no-repeat mt-8   bg-center h-[570px] bg-contain     flex justify-center items-center  font-poppins "  >
            <div className="" >
                <div className="text-6xl font-medium text-pink-900  ">
                   <span className=" hover:px-1 scale-110 transition-all">Unlock Women's Potential,</span> 
                </div>
                <div className="text-3xl ml-14 mt-4 font-medium text-pink-900 flex gap-2 ">
                      Elevate  Your Life with <span className="text-pink-900 shadow-sm">SheBizConnect</span>
                
                 </div>
                
            </div>
     
        </div >

        <div class="text-center mt-2 ">
  <span class="text-4xl text-pink-900">Premium Services</span>
</div>
        <hr className=" border-pink-900 mt-12 opacity-60  drop-shadow-md  mx-16" />
        <Link to={'/categories'}>
        <div className=" flex gap-10 ml-[20%]">
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-9 w-20 h-8">All</button>
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-9 w-24 h-8" >Cooking</button>
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-9 w-24 h-8" >Art</button>
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-9 w-24 h-8" >Style</button>
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-9 w-28 h-8" >Marketing</button>
          
        </div>
        </Link>


       
      <Link to={'/categories'}> <Card/></Link>

        
        </>
    )
}



{/* <div className="bg-[url('/girlb.png')] bg-no-repeat mt-8   bg-center h-[570px] bg-contain     flex justify-center items-center  font-poppins "  > */}