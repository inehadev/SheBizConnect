import React, { useState } from "react";
import { useRef } from "react";
import { X } from 'lucide-react'
import axios from "axios";


const AddItem =({onclose})=>{
  const [file , setfile]=useState('');
  const [name , setname]=useState();
  const [price , setprice]=useState();
    const modalRef=useRef();

    const closeModal = (e) => {
        if (modalRef.current && modalRef.current === e.target) {
            onclose();
      }
    }

    const handlepreview =(file)=>{
      const Reader = new FileReader();
      Reader.readAsDataURL(file);
      Reader.onloadend=()=>{
        setfile(Reader.result);
        console.log(Reader.result);
      }
      
    }
    
   const handleimg =(e)=>{
   const  file = e.target.files[0];
   const selectedfile = file;
   if(!selectedfile){
    console.log("file is not selected");
   }
   console.log("file is selected");
   handlepreview(selectedfile);
   

   }

    const handleAddItem = async()=>{
      try {
        const bodyparameter = {
          name : name,
          img:file,
          price :price

        }

        const axiosheader = {
          headers:{
              "Accept":"application/json",
          }
      }

      const response = await axios.post('http://localhost:4000/createItem/:profileId' , bodyparameter , axiosheader);
      console.log(response);
        
      } catch (error) {
        console.log("handle addItem error" , error);
        
      }
    }
    return(
       <>
         <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 flex items-center flex-col justify-center bg-black bg-opacity-80"
      >
        <button onClick={onclose} className='ml-[26%] mb-1 '><X className='text-pink-200 ' size={30} /></button>
       <div  className=" h-[300px] w-[400px] rounded-md  flex flex-col items-center  gap-5 border border-pink-900 inset-0 bg-pink-200">
        <h2 className="text-3xl text-pink-900  mt-4 font-poppins">Add Item</h2>
        <input  className=" border border-pink-900 mt-2 focus: outline-none rounded-sm placeholder:text-pink-900 bg-transparent h-8 "type="file" placeholder="img" onChange={handleimg} />
        <input className="pr-24 h-8  border border-pink-900 focus: outline-none rounded-sm placeholder:text-pink-900 bg-transparent pl-2" type="text " placeholder=" item name" onChange={(e)=>setname(e.target.value)}/>
        <input className="pr-24  h-8 border border-pink-900 focus: outline-none rounded-sm placeholder:text-pink-900 bg-transparent pl-2" type="text " placeholder=" item price"  onChange={(e)=>setprice(e.target.value)}/>
        <button  className=" border border-pink-900 focus: outline-none rounded-md placeholder:text-pink-900 hover:bg-transparent h-8 mt-2 hover:text-pink-900 bg-pink-900 text-white w-[90px]" onClick={handleAddItem}>Add</button>

       </div>
       </div>
       
       </>

    )
}

export default AddItem;