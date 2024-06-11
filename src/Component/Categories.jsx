
import React from "react";
import Header from "./Header";
import Card from "./Card/Card";

export default function Categories (){
    return (
      <>
      <Header/>
      
      <div>
        <div className="text-3xl text-pink-900 mt-24 ml-10">Categories</div>
        <hr  className="w-full border-pink-900 opacity-60  drop-shadow-md mt-3 ml-9"/>
        <div className=" flex gap-10 ml-10">
          <button className="rounded-full border border-pink-900 shadow-md  mt-5 w-20 h-8">All</button>
          <button  className="rounded-full border border-pink-900 shadow-md  mt-5 w-24 h-8" >Cooking</button>
          <button className="rounded-full border border-pink-900 shadow-md  mt-5 w-24 h-8" >Art</button>
          <button className="rounded-full border border-pink-900 shadow-md  mt-5 w-24 h-8" >Style</button>
          <button className="rounded-full border border-pink-900 shadow-md  mt-5 w-28 h-8" >Marketing</button>
        </div>

        <Card />


     
      </div>

      </>
    )
}