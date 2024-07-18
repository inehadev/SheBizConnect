import React, { useEffect } from "react";
import { MapPin } from 'lucide-react';
import { Loader } from 'lucide-react';
import Header from '../../Component/Header'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import axios from "axios";
import Item from '../../Component/item/Item'
import BreadScrumb from '../../Component/BreadScrumb/BreadScrumb'

   export default function  VisitProfile  ()  {
   
    const navigate = useNavigate();
    const url = new URL(window.location.href);
    const profile= url.searchParams.get('profile')
    
    const [Profile  , setProfile]=useState();
    const [addGallery, setAddGallery] = useState([]);
    const [loading , setloading]=useState(true);
    useEffect (()=>{

        // const handleProfile = async()=>{
           
        //     try{
        //         const response = await axios.get(`http://localhost:4000/getprofile/${profile}`);
               
        //         if(response){
        //             setProfile(response.data);
        //         }
        //     }
        //     catch(error){
        //         console.log("error in get profile"  , error )
        //     }finally{
        //         setloading(false);
        //     }

        // }

        const handleItem =async()=>{
            try {
            const response = await axios.get(`http://localhost:4000/visit/${profile}`);
            if (response && response.data) {
                setAddGallery(response.data.AddGallery);
                console.log(response.data.AddGallery);
            }  
            }  catch(error){
                console.log("error in get profile"  , error )
            }finally{
                setloading(false);
            }
        }


        
        handleItem();

    } , [])

    if(loading){
        return (
            <div className="mt-[25%] ml-[50%] text-3xl ">  <Loader  size={40}/></div>
        )
    }
 
    
     
     const handleupdate= ()=>{
        navigate(`/updateprofile?profile=${profile}`);

     }

    return (
        <>

        
        <Header />
       
        <div className="flex  justify-between">
            <div></div>
            <div className="mt-14 ml-28 text-lg  font-poppins  mr-36 "><button className=' hover:text-black border border-pink-900 hover:bg-transparent px-1  text-white bg-pink-900 rounded-md font-medium' onClick={handleupdate}>
                Update Profile</button></div>
        </div>
        
        
        {/* <hr className="w-full border-pink-900 opacity-40   mt-16 drop-shadow-md  " /> */}
        <div className=" justify-around mt-[2%]   items-center ">
       
        {addGallery.length > 0 && (

        <div  key={addGallery._id} className="grid  grid-cols-col gap-1 h-[400px]   mt-[8%] justify-center it">
        {addGallery.map((src, index) => (
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
{addGallery.map((src, index) => (
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
 {addGallery.map((src, index) => (
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




{addGallery.map((src, index) => (
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
        )}
             {/* {/* <div className=' justify-center '>
        
                
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

