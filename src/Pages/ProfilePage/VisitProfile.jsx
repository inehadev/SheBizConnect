import React, { useEffect } from "react";
import { MapPin } from 'lucide-react';
import { Loader } from 'lucide-react';
import Header from '../../Component/Header'
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import axios from "axios";
import Item from '../../Component/item/Item'
import BreadScrumb from '../../Component/BreadScrumb/BreadScrumb'

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
 
    
     
     const updateProfile = async()=>{
        try {
            
         const bodyparameter ={
            
            
         }            
        } catch (error) {
            
        }
     }
    
       const images = [
        "/snacks1.jpg",
        "/snacks2.jpg",
        "/nan.jpg",
        "/snacks3.jpg"
    ];


    return (
        <>

        
        <Header />
        <div className="flex  justify-between">
            <div></div>
            <div className="mt-14 ml-28 text-lg  font-poppins  mr-36 "><button className=' hover:text-black border border-pink-900 hover:bg-transparent px-1  text-white bg-pink-900 rounded-md font-medium'>
                <Link to={'/updateprofile'}>Update Profile</Link></button></div>
        </div>
        
        
        {/* <hr className="w-full border-pink-900 opacity-40   mt-16 drop-shadow-md  " /> */}
        <div className=" justify-around mt-[2%]   items-center ">
       
         

        <div className="grid grid-cols-col gap-1 h-[400px]   mt-[8%] justify-center it">
        {images.map((src, index) => (
                        index === 0 && (
                            <div key={index}>
                                <img
                                    className="object-cover w-full rounded-md border border-pink-900 h-full hover:scale-90 transition-all duration-100"
                                    src={src}
                                    alt=""
                                />
                            </div>
                        )
                    ))}

<div className=" grid grid-rows-row gap-1">
{images.map((src, index) => (
                        index === 1 && (
                            <div key={index}>
                                <img
                                    className="object-cover w-full rounded-md border border-pink-900 h-full hover:scale-90 transition-all duration-100"
                                    src={src}
                                    alt=""
                                />
                            </div>
                        )
                    ))}
 {images.map((src, index) => (
                        index === 2 && (
                            <div key={index}>
                                <img
                                    className="object-cover w-full rounded-md border border-pink-900 h-full hover:scale-90 transition-all duration-100"
                                    src={src}
                                    alt=""
                                />
                            </div>
                        )
                    ))}
</div>




{images.map((src, index) => (
                        index === 3 && (
                            <div key={index}>
                                <img
                                    className="object-cover w-full rounded-md border border-pink-900 h-full hover:scale-90 transition-all duration-100"
                                    src={src}
                                    alt=""
                                />
                            </div>
                        )
                    ))}

</div> 

             <div className=' justify-center '>
        
                
        <div className='ml-5 mt-2 flex  justify-start  m-36'  >
           <div className="ml-24 mt-2 font-poppins"> <h3 className='text-3xl font-medium   text-pink-900 '>{Profile.title}</h3>
           <p className='text-xl text-pink-900 font-poppins'> {Profile.typeofp}</p>
           <p className='font-poppins text-pink-900' >{Profile.location}</p>
         
          </div>
         
           <div className="mt-2 w-12 ml-4">  <span className=' bg-pink-900  flex text-sm mt-1 px-2  py-1  rounded-lg text-white'>3.1<MdOutlineStar size={20} className=" "  /> </span>
         
           </div>
           
    </div>
    </div>

            

         
         
           
    {/* {Profile.ratings && Profile.ratings.length > 0 ? Profile.ratings.map(rating => getStarRatingRepresentation(rating)).join(', ') : ''}   */}


          </div>

          
          <Item/>

           
        
        </>
    )
}



       
    // const getStarRatingRepresentation = (rating) => {
    //     if (rating === 1) {
    //       return '1⭐';
    //     } else if (rating === 2) {
    //       return '⭐⭐';
    //     } else if (rating === 3) {
    //       return '⭐⭐⭐'; // Special condition for 3 stars
    //     } else if (rating === 4) {
    //       return '⭐⭐⭐⭐';
    //     } else if (rating === 5) {
    //       return '⭐⭐⭐⭐⭐';
    //     } else {
    //       return 'Rating not available';
    //     }
    //   };