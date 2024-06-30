import React, { useEffect } from "react";
import { MapPin } from 'lucide-react';
import Header from '../../Component/Header'
   export default function  VisitProfile  ()  {

    const url = new URL(window.location.href);
    const profile= url.searchParams.get('profile')

    useEffect (()=>{

        const handleProfile = async()=>{
           
            try{
                const response = await axios.get(`http://localhost:4000/getprofile/${profile}`);
                console.log(response)
            }
            catch(error){
                console.log("error in get profile"  , error )
            }

        }

    } , [])

    return (
        <>

        
        <Header />

          <div  className=' '><button className='place-item-end ml-[87%] mt-10 hover:text-white border border-pink-900 hover:bg-pink-900 px-2 py-1 rounded-md font-medium'>Create Profile</button></div>
      <div className='flex flex-wrap justify-center gap-8 mt-14'>
      

          <div   className='bg-pink-100 ml-9   '>
                <div    className='  rounded-sm'>
                    <img     className='h-[200px] rounded-lg border  border-pink-900 border-2px
                    ' src='/saloon.jpg' alt="" />
                </div>
                <div className='ml-5 mt-2 '  >
                    <h3 className='text-xl font-medium  text-pink-900 '>Hair Saloon</h3>
                    <span className='  px-1 rounded-lg'>⭐</span>
                    {/* <span className='font-normal ml-2'>{item.type}</span> */}
                    <p className='mt-1'> salon</p>
                    <p className='mt-1 mb-3'>    <MapPin />Amritsar town road </p>

                </div>


            </div>
        
            </div>

       
        
        </>
    )
}

