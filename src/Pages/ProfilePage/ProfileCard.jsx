import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function ProfileCard() {
  const navigate = useNavigate();
   const url = new URL(window.location.href);

const category = url.searchParams.get('category');

console.log(category);

    const [profile , setprofile]=useState([]);
    

    useEffect(()=>{
         
            const getCategory =async()=>{
                try {
                   console.log("working");
                    const response = await axios.get(`http://localhost:4000/getsubcategory/${category}`);
                     console.log("good");
                    console.log(response.data);

                    if (response.data && response.data.profiles) {
                      setprofile(response.data.profiles);
                    } else {
                      console.error("Response data does not contain 'profiles'", response.data);
                    }
                  } catch (error) {
                    console.log({ message: "Integration error of get category", error });
                  }
            
    };
   if(category){
    getCategory();
   }
        
    } , [category]);

    

    

    const handleprofileclick = (profileId)=>{
      console.log( "profileId is " , profileId);
      navigate(`/profile/${profileId}`);
    }
  

    
       

    return (

        <>

            <Header />
          <div  className=' '><Link to={'/createprofile'}><button className='place-item-end ml-[87%] mt-10 hover:text-white border border-pink-900 hover:bg-pink-900 px-2 py-1 rounded-md font-medium'>Create Profile</button></Link></div>
      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {profile.map((item)=>(

          <div   className='bg-pink-100 ml-9   '>
                <div key={item._id}   className='  rounded-sm'>
                    <img  onClick={() => handleprofileclick(item._id)}   className='h-[200px] rounded-lg border  border-pink-900 border-2px
                    ' src={item.img} alt="" />
                </div>
                <div className='ml-5 mt-2 '  >
                    <h3 className='text-xl font-medium  text-pink-900 '>{item.title}</h3>
                    <span className='  px-1 rounded-lg'>{item.rating}⭐</span>
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
