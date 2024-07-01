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
        <div className="mt-[50%] ml-[50%] text-3xl ">L  <Loader  size={40}/></div>
    )
}
 
       
    


    return (
        <>

        
        <Header />
        <div className=' justify-center    mt-[10%] ml-[35%]'>
        
                <div  className='  rounded-sm'>
                    <img   className='h-[200px]  rounded-md
                    ' src={Profile.img} alt="" />
                </div>
                <div className='ml-5 mt-2 '  >
                    <h3 className='text-xl font-medium  text-pink-900 '>{Profile.title}</h3>
                    <span className='  px-1 rounded-lg'>{Profile.rating}</span>
                  <input type="text" />
                    <p className='mt-1'> {Profile.typeofp}</p>
                    <p className='mt-1 mb-3'>{Profile.location}</p>

             


            </div>
            </div>

         
         
           
              


          
           
        
        </>
    )
}

