import React, { useState ,useRef,useEffect } from 'react'
import { X } from 'lucide-react'
import axios from 'axios';

const UpdateCategory =({onclose})=>{
  console.log("fine")
    const [type , settype]=useState('');
    const [file , setfile]=useState('');
    const url = new URL(window.location.href);
    const categoryId = url.searchParams.get('category');
    const modalRef=useRef();

    const handleFile =(e)=>{
      const file = e.target.files[0];
     if(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        setfile(reader.result);
        console.log(reader.result);
      }}
      else{
        console,log("no file is selected ");
      }
     }
    

    const handleUpdate = async()=>{
        try {
            const bodyParameter ={
                CategoryType:type,
                image :file
            }
            const token = localStorage.getItem('x-auth-token');
            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                    'x-auth-token':token,
                }
              }

              const response = await axios.put(`https://shebiz-backend.vercel.app/updateCategory/${categoryId}`, bodyParameter , axiosheader);
              console.log("Updated Successfully" , response);
            
        } catch (error) {
            console.log(error);
            
        }
      }

      const closeModal =(e)=>{
        if(modalRef.current && modalRef.current===e.target.value){
          onClose();
        }
      }

    

   return (
    <>
   
<div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      >
     
      
    <div className=''> 
          <button  className=' flex ml-[90%] ' onClick={onclose}><X className='text-pink-900 ' size={30} /></button>
        
        
        <div className=" flex flex-col h-[250px] bg-rose-50 w-[400px]  mt-4 border  border-pink-900 rounded-lg  ">
           
          <input className='border border-pink-900 ml-9 w-[300px]  bg-transparent placeholder: text-lg , placeholder: 
       text-pink-900 mt-10 rounded-sm  px-4 focus: outline-none' placeholder='Category' type='text' onChange={(e) => {
              settype(e.target.value);
            }} />
  
          <input className='border border-pink-900 ml-9 w-[300px] focus-outline-none bg-transparent py-1 placeholder: text-sm placeholder:text-pink-900 h-[10] mt-10 rounded-sm px-4' placeholder='img' type='file'  onChange={handleFile} />
         
          <button className='mt-[13%] ml-[57%] border border-pink-900   hover:text-pink-800 h-9 bg-pink-900 text-white hover:bg-transparent w-24 rounded-lg'onClick={handleUpdate} >Update</button>
        </div>
        </div>
        </div>
        
       
      </>
   )

  }


export default UpdateCategory;