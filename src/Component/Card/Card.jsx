import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


export default function Card ({filter}){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:4000/getCategory");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    // const [data,setdata]=useState([
    //     { id: category._id, src: {category.image}, title: {category.CategoryType} },
    //    ])



    
   
    return (
    <>
        <Marquee play speed={120} pauseOnHover={true}>
              <Link to={'/categories'}>
        <div className="mt-10 flex  flex-wrap justify-center gap-14">
          
         { categories.map((item)=>(
              <div className="flex  ">
 
              <div key={item._id} className=  " border  border-pink-900  rounded-xl mt-10 h-[200px]    mb-7 ">
              <img className="  border  border-pink-900  h-[160px]  rounded-xl "  src={item.image} alt="img" />
              <p className="text-xl mt-2 text-pink-900 shadow-md  ml-7 font-weigh-5 " > {item.CategoryType}</p>
              </div>
            
             </div>
     ))}
        </div>
        </Link>
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