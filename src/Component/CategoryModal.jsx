import React, { useState } from 'react'
import { X } from 'lucide-react'
import axios from 'axios'


function CategoryModal({ onClose }) {
  const [file, setfile] = useState(null);
  const [type, settype] = useState('');
  

  const handleChange = async (e) => {
     
    const token = localStorage.getItem('x-auth-token');
    console.log("working")
    try {

      const bodyparameter = {
        categoryType: type,
        image: file,
      }
      console.log(bodyparameter.categoryType); // Correctly accessing categoryType
      console.log(bodyparameter.image);
      const axiosheader = {
        headers: {
          "Accept": "application/json",
          'x-auth-token':token,
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
  function previewfile (){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      setfile(reader.result);
      console.log(file);
    }
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }
    setfile(file);
    previewfile(file);
    console.log(setfile);
  };

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

        <input className='border border-pink-900 ml-9 w-[300px] bg-transparent py-1 placeholder: text-sm placeholder: text-pink-900 h-[10] mt-10 rounded-sm px-4' placeholder='img' type='file' onChange={handleFileChange} />
        { file &&(
          <div>
            <img  src={file} alt='img' className='h-14 '/>
          </div>
        )}
        <button className='mt-[13%] ml-[57%] border border-pink-900   hover:text-pink-800 h-9 bg-pink-900 text-white hover:bg-transparent w-24 rounded-lg' onClick={handleChange}>save</button>
      </div>

    </div>


  )
}

export default CategoryModal
