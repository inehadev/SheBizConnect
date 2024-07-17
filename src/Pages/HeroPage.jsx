import { Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
import Header from "../Component/Header";
import { ArrowRight } from 'lucide-react';
import Card from "../Component/Card/Card";
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../Component/Footer";
import { FaBriefcase, FaLightbulb, FaHandsHelping, FaNetworkWired, FaUsers } from 'react-icons/fa';

import React from "react";

export default function HeroPage() {

    
   
    return (
        <>
            <Header />
      
        <div className=" bg-rose-50  mr-10 ml-10 rounded-md mt-20  bg-center h-[450px] bg-contain     flex  justify-around items-center  font-poppins "  >
            <div className="" >
                <div className="text-6xl font-medium text-pink-900 ml-20  ">
                   <span className=" hover:px-1 scale-110 transition-all">Empowering Women,<span className="text-pink-900 text-5xl" > Connecting Services:</span></span> 
                </div>
                <div className="text-xl ml-20 mt-4 font-medium text-pink-900 flex gap-2 ">
                Discover, Connect, and Thrive with  <span className="text-pink-900 shadow-sm">SheBizConnect</span>
                
                 </div>
                 <div className="ml-20  mt-6 flex  "><Link to={'/categories'}><button className="bg-pink-900 text-white flex gap-1 py-1 text-md px-3 hover:bg-transparent hover:text-pink-900 hover:border border-pink-900 rounded-md h-8">Explore <ArrowRight className="mt-0 size-6" /></button></Link></div>
                 </div>
                 <div className="h-[750px] w-[900px] mr-20 "><img  src="/wemen.png" alt="" />
                 
                 </div>
                 
                
           
     
        </div >

        <div class="text-center mt-7 ">
  <span class="text-4xl text-pink-900 ">Premium Services</span>
</div>
        <hr className=" border-pink-900 mt-10   opacity-60  drop-shadow-md  mx-16" />
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


      <div className=" ">
        <span className="text-4xl justify-center mt-9 text-pink-900 flex ">Inspiring Women's Excellence</span>
        <span className="text-sm justify-center mt-4 font-poppins text-pink-900 flex ml-5 ">Celebrating the strength of women uplifting each other,  fostering  collaboration, 
          support, </span>
          <span className="text-sm justify-center mt-1 font-poppins text-pink-900 flex ml-5 "> and shared experiences for collective growth and success. </span>

        

        <div className="h-[600px] w-[900px] bg-[url('/path/to/Desktop.png')] bg-cover bg-center flex ml-[20%]">
       <img className="object-cover hover:scale-110 transition-transform duration-200 " src="/Frame 2.png" alt="" />
       </div>

        
      </div>

      <Footer/>


      
        </>
    )
}



