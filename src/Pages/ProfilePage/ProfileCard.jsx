import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header'
import { Loader } from 'lucide-react';
import { Link,  useNavigate } from 'react-router-dom'
import BreadScrumb from '../../Component/BreadScrumb/BreadScrumb'
import UpdateCategory from "../../Component/UpdateCategory";
import axios from 'axios';


function ProfileCard() {
  const navigate = useNavigate();
   const url = new URL(window.location.href);

const category = url.searchParams.get('category');

console.log(category);

    const [profile , setprofile]=useState([]);
    const [loading , setloading]=useState(true);
    const[showmodal , setshowmodal]=useState(false);

    useEffect(()=>{
         
            const getCategory =async()=>{
                try {
                   
                    const response = await axios.get(`https://she-biz-connect-backend.vercel.app/getsubcategory/${category}`);
                     
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
          
            <div className='flex justify-end gap-9'>
                <div  className='mt-14  text-lg font-poppins  '><button className=' hover:text-white border border-pink-900 hover:bg-pink-900 px-2  text-gray-600 bg-transparent rounded-md font-sm' onClick={()=>setshowmodal(true)}>Update Category</button></div>
             <div  className='mt-14  text-lg  font-poppins  mr-36'><Link to={'/createprofile'}><button className=' hover:text-black border border-pink-900 hover:bg-transparent px-2  text-white bg-pink-900 rounded-md font-medium'>Create Profile</button></Link></div>
            
            </div>

            
       
      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {profile.map((item)=>(

          <div   className='bg-rose-50 ml-9  border border-gray-500 border-opacity-10 rounded-md h-[300px]  '>
                <div key={item._id}   className=' w-[300px] h-[170px]  rounded-sm'>
                    <img  onClick={() => handleprofileclick(item._id)}   className='rounded-md w-full h-full object-cover hover:scale-90 transition-all duration-200
                    ' src={item.profileImg} alt="" />
                </div>
                <div className='justify-center mt-2 '  >
                    <h3 className='text-xl  text-center  font-poppins font-medium  text-pink-900 '>{item.title}</h3>
                     {/* <span className='  px-1 rounded-lg'>{item.rating}</span>
                     <span className='font-normal ml-2'>{item.type}</span> */}
                    <p className='mt-1 text-gray-600 font-medium font-poppins text-center'> {item.typeofp}</p>
                    <p className='mt-1 mb-3 text-gray-600 font-medium  font-poppins text-center'>{item.location}</p>

                </div>


            </div>
            ) )}
            </div>

          
            {showmodal && (
            <>
            <UpdateCategory onClose={()=>setshowmodal(false)}/>
            </>
          )}
        </>
    )
}

export default ProfileCard
