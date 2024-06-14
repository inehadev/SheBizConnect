import React, { useState } from 'react'
import { X } from 'lucide-react'
import axios from 'axios'

function CategoryModal({ onClose }) {
  const [file, setfile] = useState(null);
  const [type, settype] = useState('');

  const handleChange = async () => {
    console.log("working")
    try {

      const bodyparameter = {
        categoryType: type,
        image: file,
      }

      const axiosheader = {
        headers: {
          "Accept": "application/json",
        }
      }

      const response = await axios.post('http://localhost:4000/category' , bodyparameter , axiosheader);
      if(response){
        console.log(response.data);
      }

    } catch (error) {
      console.log(error);

    }

  }

  return (


    <div className=' mt-[5%] min-h-screen'>
      <div className='flex justify-center gap-32 '>
        {/* <h1 className='  mt-[35px]  text-3xl text-pink-900'>Add category</h1> */}
        <button onClick={onClose} className=' mt-[40px]'><X className='text-pink-900 ml-[320px]' size={30} /></button>
      </div>
      <div className=" flex flex-col h-[250px]  w-[400px]  mt-4 border  border-pink-900 rounded-lg  ">

        <input className='border border-pink-900 ml-9 w-[300px]  bg-transparent placeholder: text-lg , placeholder: 
     text-pink-900 mt-10 rounded-sm  px-4' placeholder='Category' type='text' onChange={(e) => {
            settype(e.target.value);
          }} />
        <input className='border border-pink-900 ml-9 w-[300px] bg-transparent placeholder: text-lg placeholder: text-pink-900 h-[10] mt-10 rounded-sm px-4' placeholder='img' type='file' onChange={(e) => {

          setfile(e.target.value);
        }} />
        <button className='mt-[13%] ml-[57%] border border-pink-900   hover:text-pink-800 h-9 bg-pink-900 text-white hover:bg-transparent w-24 rounded-lg' onClick={handleChange}>save</button>
      </div>

    </div>


  )
}

export default CategoryModal
