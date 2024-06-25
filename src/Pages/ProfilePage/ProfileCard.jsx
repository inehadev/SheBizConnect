import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header'
import { Link , useLocation } from 'react-router-dom'
import axios from 'axios';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function ProfileCard() {
    const [profile , setprofile]=useState([]);
  

   

      const query = useQuery();
      const category = 'Cooking'; 

    useEffect(()=>{
           
            const getCategory =async()=>{
                try {
                    console.log("fine");
                    const response = await axios.get(`http://localhost:4000/getsubcategory`, {
                        params: { categoryType: category ,  subcategory: category  } // Adjust the subcategory dynamically if needed
                      });
                      console.log("good")
                console.log(response.data)
                // if (Array.isArray(response.data)) {
                //     setprofile(response.data);
                // } else {
                //     console.error("Response data 'allprofile' is not an array", response.data);
                // }
               
            
        } catch (error) {
            console.log({message:"integration error of get category" , error});
            
        }
    };
   if(category){
    getCategory();
   }
        
    } , [category]);


    //     const fetchProfiles = async () => {
    //         try {
    //             const categoryId = new URLSearchParams(location.search).get('category');
    //             const subcategory = 'cooking'; // Specify your subcategory here (e.g., 'cooking')

    //             if (!categoryId) {
    //                 console.error('No category ID provided.');
    //                 return;
    //             }

    //             const response = await axios.get(`http://localhost:4000/getProfilesBySubcategory?categoryId=${categoryId}&subcategory=${subcategory}`);
    //             if (Array.isArray(response.data.profiles)) {
    //                 setprofile(response.data.profiles);
    //             } else {
    //                 console.error("Response data 'profiles' is not an array", response.data);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching profiles:", error);
    //         }
    //     };

    //     fetchProfiles();
    // }, [location.search]);

   

    return (

        <>
            <Header />
          <div className=' '><Link to={'/createprofile'}><button className='place-item-end ml-[87%] mt-10 hover:text-white border border-pink-900 hover:bg-pink-900 px-2 py-1 rounded-md font-medium'>Create Profile</button></Link></div>
      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {profile.map((item)=>(

          <div   className='bg-pink-100 ml-9   '>
                <div key={item.id} className='  rounded-sm'>
                    <img className='h-[200px] rounded-lg border  border-pink-900 border-2px
                    ' src={item.img} alt="" />
                </div>
                <div className='ml-5 mt-2 '>
                    <h3 className='text-xl font-medium  text-pink-900 '>{item.title}</h3>
                    {/* <span className='  px-1 rounded-lg'>{item.rating}</span> */}
                    <span className='font-normal ml-2'>{item.type}</span>
                    {/* <p className='mt-1'> {item.category}</p> */}
                    <p className='mt-1 mb-3'>{item.location}</p>

                </div>


            </div>
            ) )}
            </div>
        </>
    )
}

export default ProfileCard
