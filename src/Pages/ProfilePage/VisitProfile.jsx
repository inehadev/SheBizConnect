import React, { useEffect } from "react";
import { MapPin } from 'lucide-react';
import { Loader } from 'lucide-react';
import Header from '../../Component/Header'
import { useState } from "react";
import axios from "axios";
   export default function  VisitProfile  ()  {

    const url = new URL(window.location.href);
    const profile= url.searchParams.get('profile')
    console.log(profile)
    const [Profile  , setProfile]=useState();
    const [loading , setloading]=useState(true);
    useEffect (()=>{

        const handleProfile = async()=>{
           
            try{
                const response = await axios.get(`http://localhost:4000/getprofile/${profile}`);
                console.log(response.data)
                if(response){
                    setProfile(response.data);
                }
            }
            catch(error){
                console.log("error in get profile"  , error )
            }finally{
                setloading(false);
            }

        }
        handleProfile();

    } , [profile])

    if(loading){
        return (
            <div className="mt-[25%] ml-[50%] text-3xl ">  <Loader  size={40}/></div>
        )
    }
 
       
    const getStarRatingRepresentation = (rating) => {
        if (rating === 1) {
          return '⭐';
        } else if (rating === 2) {
          return '⭐⭐';
        } else if (rating === 3) {
          return '⭐⭐⭐'; // Special condition for 3 stars
        } else if (rating === 4) {
          return '⭐⭐⭐⭐';
        } else if (rating === 5) {
          return '⭐⭐⭐⭐⭐';
        } else {
          return 'Rating not available';
        }
      };
    
     
    
    


    return (
        <>

        
        <Header />
        <hr className="w-full border-pink-900 opacity-40   mt-16 drop-shadow-md  " />
        <div className=" justify-around mt-[2%]   items-center ">
       
         

             <div className="grid grid-cols-col gap-2   h-[400px]  mt-[5%] justify-center it">
              <div className=" "><img className="object-cover w-full h-full hover:scale-90 traslate-all duration-100" src="/cake.jpg" alt="" /></div>
              <div className="grid grid-rows-row gap-2">
              <div className="">
                 <img   className="object-cover hover:scale-90 traslate-all duration-100 w-full h-full" src="/paneer.jpg" alt="" />
              </div>
              <div>
                   <img  className="object-cover hover:scale-90 traslate-all duration-100" src="nan.jpg" alt="" />
              </div>
              </div>
              <div className="">
                <img  className="object-cover w-full h-full hover:scale-90 traslate-all duration-100 " src="burger.jpg" alt="" />
              </div>
             </div>


             <div className=' justify-center '>
        
                
        <div className='ml-5 mt-2 '  >
            <h3 className='text-xl font-medium  text-pink-900 '>{Profile.title}</h3>
            <span className='  px-1 rounded-lg'>  {Profile.ratings && Profile.ratings.length > 0 ? Profile.ratings.map(rating => getStarRatingRepresentation(rating)).join(', ') : 'No ratings yet'}</span>
         
            <p className='mt-1'> {Profile.typeofp}</p>
            <p className='mt-1 mb-3'>{Profile.location}</p>
    </div>
    </div>

            

         
         
           
              


          </div>
           
        
        </>
    )
}

