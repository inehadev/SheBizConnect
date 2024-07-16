
import React, { useState , useEffect } from "react";
import Header from "./Header";
import Card from "./Card/Card";
import { IoMdAdd } from "react-icons/io";
import CategoryModal from "./CategoryModal";
import { Link } from "react-router-dom";
import BreadScrumb from "./BreadScrumb/BreadScrumb";
import Marquee from "react-fast-marquee";
import UpdateCategory from "./UpdateCategory";



export default function Categories() {

const [showModal , setMoadal]=useState(false);


const [showUpdateModal , setUpdateModal]=useState(false);

 
  return (
    <>
      <Header />
      

      <div>
        <div className="flex justify-between">
          <div className="text-3xl text-pink-900 mt-24 ml-10">Categories</div>
          <div className="text-2xl text-pink-900 mt-24 mr-20"> Add Categories <button  className="mt-1" onClick={()=>setMoadal(true)}> <IoMdAdd className="ml-1 mt-2 " /></button>
        
          </div>
        </div>


        <hr className="w-full border-pink-900 opacity-60  drop-shadow-md mt-3 ml-9" />
        <div className="flex justify-start gap-28">
        <button className="rounded-md hover:bg-transparent hover:text-pink-900 border bg-pink-900  font-poppins text-white shadow-md  mt-5 ml-10 w-36 h-8" onClick={()=>setUpdateModal(true)}>Update Category</button>
        <div className=" flex gap-10 ml-10">
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-5 w-20 h-8">All</button>
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-5 w-24 h-8" >Cooking</button>
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-5 w-24 h-8" >Art</button>
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-5 w-24 h-8" >Style</button>
          <button className="rounded-full hover:bg-pink-800 hover:text-white border border-pink-900 shadow-md  mt-5 w-28 h-8" >Marketing</button>
        </div>
       
        </div>

        {!showModal || !showUpdateModal && (
          <div>
            <Card />
          </div>
        )}
      </div>


     

      
      
        {showModal && (
          <>
            <CategoryModal onClose={()=>setMoadal(false)} />
            
          </>
            
          )}

          {showUpdateModal && (
            <>
            <UpdateCategory onClose={()=>setUpdateModal(false)}/>
            </>
          )}
          

    </>
  )
}