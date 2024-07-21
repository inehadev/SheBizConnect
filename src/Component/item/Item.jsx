import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = ()=>{
  const[Item , setItem]=useState([]);
  const url = new URL( window.location.href);
  const profile = url.searchParams.get('profile');
  useEffect(()=>{

    const handleItem =async()=>{
     try {
      const response= await axios.get(`http://localhost:4000/profileItem/${profile}`);
      console.log(response);
      if(response){
        setItem(response.data);
      }
      
     } catch (error) {
      console.log(error);
      
     }
    }
    handleItem();
  },[])
    return(
       <>
       <div className="h-[110px] ml-[10%]   flex-col flex-wrap  ">

        {Item.map((item)=>(
          <div  key={item.id}  className="flex h-[150px] gap-6 mt-8 ">
          <img  className=" w-[200px] object-cover rounded-md"   src={item.img}alt="" />
           <div className="flex flex-col gap-2">
            <span className="text-2xl font-poppins text-pink-900 ">{item.name}</span>
           <span>⭐⭐⭐⭐</span>
           <span>{item.price}</span>
           <span className="text-pink-900 font-poppins">Super tasty , curunchy & yummy veg kurkure lollipops</span>
           </div>
           </div>
        ))}

       

      

       </div>
       </>
    )
}
export default Item