import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header'
import { Link } from 'react-router-dom'
import axios from 'axios';

function ProfileCard() {
    const [profile , setprofile]=useState([]);
    useEffect(()=>{
       
            const getCategory =async()=>{
                try {
                const response = await axios.get('http://localhost:4000/getprofile');
                // setprofile(response.data);
                console.log(response.data)
                if (Array.isArray(response.data.allprofile)) {
                    setprofile(response.data.allprofile);
                } else {
                    console.error("Response data 'allprofile' is not an array", response.data);
                }
               
            
        } catch (error) {
            console.log({message:"integration error of get category" , error});
            
        }
    };
    getCategory();
        
    } , []);
    // const data = [
    //     // {id:'1 ', src: '/nan.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'},
    //     // {id:'2', src: '/burger.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'},
    //     // {id:'3 ', src: '/sandwich.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'},
    //     // {id:'4', src: '/paneer.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'},
    //     // {id:'5 ', src: '/sandwich.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'}

        
        
    // ]

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
