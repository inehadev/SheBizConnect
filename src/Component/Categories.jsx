import { Flex, Box, Heading , Card , Image , CardBody, Stack , Text , Divider , CardFooter  ,  Button , ButtonGroup } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

export default function Categories (){
    return (
      <>
      
      <div>
        <div className="text-3xl text-pink-900 mt-10 ml-10">Categories</div>
        <hr  className="w-full border-pink-900 opacity-60 drop-shadow-md mt-2 ml-9"/>
        <div className=" flex gap-10 ml-10">
          <button className="rounded-full border border-pink-900 shadow-md  mt-5 w-20 h-8">All</button>
          <button  className="rounded-full border border-pink-900 shadow-md  mt-5 w-24 h-8" >Cooking</button>
          <button className="rounded-full border border-pink-900 shadow-md  mt-5 w-24 h-8" >Art</button>
          <button className="rounded-full border border-pink-900 shadow-md  mt-5 w-24 h-8" >Style</button>
          <button className="rounded-full border border-pink-900 shadow-md  mt-5 w-28 h-8" >Marketing</button>
        </div>

        <div className="flex">

        <div className=  " rounded-md mt-10 h-[210px] w-[300px] ml-12 ">
        <img className="  border  border-pink-900 rounded-md onject-contain  "  src="/cooking.jpg" alt="img" />
        <p className="text-xl mt-2 text-pink-900 ml-7 " > Cooking</p>
        </div>
      
       <div className=  "  rounded-md mt-10 h-[240px] w-[300px] ml-12 ">
        <img className="  border border-pink-900 rounded-md onject-contain  "  src="/art.jpg" alt="img" />
        <p className="text-xl mt-2 text-pink-900 ml-7 " >Art</p>
        </div>

        <div className=  "rounded-md mt-10 h-[200px] w-[300px] ml-12 ">
        <img className=" border border-pink-900 rounded-md onject-contain h-[230px] "  src="/makeup.jpg" alt="img" />
        <p className="text-xl mt-2 text-pink-900 ml-7 " >Style</p>
        </div>
      

       </div>
      </div>

      </>
    )
}