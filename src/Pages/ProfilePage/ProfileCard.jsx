import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header'
import { Loader } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BreadScrumb from '../../Component/BreadScrumb/BreadScrumb'
import axios from 'axios';


function ProfileCard() {
  const navigate = useNavigate();
   const url = new URL(window.location.href);

const category = url.searchParams.get('category');

console.log(category);

    const [profile , setprofile]=useState([]);
    const [loading , setloading]=useState(true);

    useEffect(()=>{
         
            const getCategory =async()=>{
                try {
                   
                    const response = await axios.get(`http://localhost:4000/getsubcategory/${category}`);
                     
                    console.log(response.data);

                    if (response.data && response.data.profiles) {
                      setprofile(response.data.profiles);
                    } else {
                      console.error("Response data does not contain 'profiles'", response.data);
                    }
                  } catch (error) {
                    console.log({ message: "Integration error of get category", error });
                  }finally{
                    setloading(false);
                  }
            
    };
   if(category){
    getCategory();
   }
        
    } , [category]);

    

    if(loading){
      return (
          <div className="mt-[25%] ml-[50%] text-3xl ">  <Loader  size={40}/></div>
      )
  }
    

    const handleprofileclick = (profileId)=>{
         navigate(`/visitprofile?profile=${profileId}`)
   ;
    }
  

    
       

    return (

        <>

            <Header />
            <div className='flex justify-between'>
             <div></div>
             <div  className='mt-14 ml-28 text-lg  font-poppins  mr-36'><Link to={'/createprofile'}><button className=' hover:text-black border border-pink-900 hover:bg-transparent px-1  text-white bg-pink-900 rounded-md font-medium'>Create Profile</button></Link></div>

            </div>

            
       
      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {profile.map((item)=>(

          <div   className='bg-rose-50 ml-9  h-[300px]  '>
                <div key={item._id}   className=' w-[300px] h-[170px]  rounded-sm'>
                    <img  onClick={() => handleprofileclick(item._id)}   className='rounded-md w-full h-full object-cover hover:scale-90 transition-all duration-200
                    ' src={item.img} alt="" />
                </div>
                <div className='ml-5 mt-2 '  >
                    <h3 className='text-xl font-medium  text-pink-900 '>{item.title}</h3>
                    {/* <span className='  px-1 rounded-lg'>{item.rating.number}</span> */}
                    {/* <span className='font-normal ml-2'>{item.type}</span> */}
                    <p className='mt-1'> {item.typeofp}</p>
                    <p className='mt-1 mb-3'>{item.location}</p>

                </div>


            </div>
            ) )}
            </div>
        </>
    )
}

export default ProfileCard
