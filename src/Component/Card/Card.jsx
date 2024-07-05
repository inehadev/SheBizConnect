import axios from "axios";
import React, { useEffect, useState } from "react";
import {Loader} from 'lucide-react'
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";


export default function Card ({filter}){
    const [categories, setCategories] = useState([]);
    const [loading , setloading]=useState(true);
    const  navigate=useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:4000/getCategory");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }finally{
                setloading(false);
            }
        };

        fetchCategories();
    }, []);

    
   
if(loading){
    return (
        <div className="mt-[25%] ml-[50%] text-3xl ">  <Loader  size={40}/></div>
    )
}
    const handleCategoryClick = (categoryType) => {
        
        navigate(`/profile?category=${categoryType}`);
    };

    
   
    return (
    <>
        <Marquee play speed={200} pauseOnHover={true}>
             
        <div className="mt-10 flex  flex-wrap justify-center gap-14">
          
         { categories.map((item)=>(
              <div className="flex  ">
 
              <div key={item._id} className=  " border  border-pink-900  rounded-md mt-10 h-[210px]    mb-7 " >
              <div className=" cursor-pointer" onClick={() => handleCategoryClick(item._id)}    >
                 <img className=" h-[160px] w-full rounded-md"src={item.image}alt="img"/>
               
              <p className="text-xl mt-2 text-pink-900  font-poppins  text-center font-weigh-5 " > {item.CategoryType}</p>
              </div>
            </div>
             </div>
     ))}
        </div>
       
        </Marquee>

        
        </>
    )
}







 {/* <div className=  "   border border-pink-900  rounded-md mt-10 h-[200px]  bg-pink-900">
             <img className="  border border-pink-900   h-[160px]  "  src="/art.jpg" alt="img" />
             <p className="text-xl mt-2 text-black ml-7 " >Art</p>
             </div>
     
             <div className=  "  border border-pink-900  rounded-md mt-10 h-[200px]  bg-pink-900 ">
             <img className=" border border-pink-900  h-[160px]  "  src="/makeup.jpg" alt="img" />
             <p className="text-xl mt-2 text-black ml-7 " >Style</p>
             </div>
           
             <div className=  "  border border-pink-900  rounded-md mt-10 h-[200px]  bg-pink-900  ">
             <img className=" border border-pink-900   h-[160px]  "  src="/health.jpg" alt="img" />
             <p className="text-xl mt-2 text-black ml-7 " >Health</p>
             </div>
     
             <div className=  " border border-pink-900 rounded-md mt-10 h-[200px]   bg-pink-900 ">
             <img className="  border border-pink-900    h-[160px]  "  src="/digital-services.jpg" alt="img" />
             <p className="text-xl mt-2 text-black ml-7 " >Marketing</p>
             </div>
      */}