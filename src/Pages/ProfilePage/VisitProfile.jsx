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
        {/* <div className="flex justify-around mt-[10%] items-center ">
        <div className=' justify-center '>
        
                <div  className='  rounded-sm'>
                    <img   className='h-[200px]  rounded-md
                    ' src={Profile.img} alt="" />
                </div>
                <div className='ml-5 mt-2 '  >
                    <h3 className='text-xl font-medium  text-pink-900 '>{Profile.title}</h3>
                    <span className='  px-1 rounded-lg'>  {Profile.ratings && Profile.ratings.length > 0 ? Profile.ratings.map(rating => getStarRatingRepresentation(rating)).join(', ') : 'No ratings yet'}</span>
                 
                    <p className='mt-1'> {Profile.typeofp}</p>
                    <p className='mt-1 mb-3'>{Profile.location}</p>
            </div>
            </div> */}
        
            {/* <div className=' justify-center gap-2 flex  h-[400px]  mt-[10%]  '>

             <div className="w-[500px]  ">
              <img className="object-cover w-[500px] h-[400px]" src="/cake.jpg" alt="" />
             </div>

             <div className=" flex-col w-[300px] gap-2  bg-white  ">
             <div className=" h-[200px]">
             <img className="object-cover w-[300px]" src="/paneer.jpg" alt="" />
             </div>
             <div className="h-[200px] ">
             <img className="object-cover" src="/nan.jpg" alt="" />
             </div>
             </div>
             
             <div className=" w-[250px]">
              <img className="object-cover w-[300px] h-[400px]" src="/burger.jpg" alt="" />
              </div>
             
      
            </div>

             */}

             <div className="grid grid-cols-3 justify-center items-center">
              <div>item1</div>
              <div>
              <div>

              </div>
              <div>

              </div>
              </div>
              <div>item3</div>


             </div>
            

         
         
           
              


          
           
        
        </>
    )
}

