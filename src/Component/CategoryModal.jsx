import React, { useState ,useRef,useEffect } from 'react'
import { X } from 'lucide-react'
import axios from 'axios'


function CategoryModal({ onClose }) {
  const [file, setfile] = useState('');
  const [type, settype] = useState('');
  const modalRef=useRef();

  
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:4000/getCategory");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    fetchCategories();
}, []);
 
  const username = localStorage.getItem('username')

  function previewfile (file){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
     setfile(reader.result);
     console.log(reader.result)
    }
    
  }
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
   
    const selectedFile = file;
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }
   
    previewfile(file);

   
  }



  const handleChange = async (e) => {
     
    const token = localStorage.getItem('x-auth-token');
   
    try {

      const bodyparameter = {
       
        CategoryType: type,
        image: file,
      }
      console.log(bodyparameter.CategoryType); 
      console.log(bodyparameter.image);
      const axiosheader = {
        headers: {
          "Accept": "application/json",
          'x-auth-token':token,
        }
      }

      const response = await axios.post('/category' , bodyparameter , axiosheader);
      if(response){
        console.log(response.data);
      }

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
        <button onClick={onClose} className=' ml-[90%] '><X className='text-pink-200 ' size={30} /></button>
      
      <div  className='flex gap-2 '>
      { file &&(
          <div className='mt-5 mr-60 h-[190px] w-[240px] bg-pink-200'>
            <img  src={file} alt='img' className='h-[190px] w-[240px]  mr-[50%] '/>
          </div>
        )}
      <div className=" flex flex-col h-[250px] bg-pink-200  w-[400px]  mt-4 border  border-pink-900 rounded-lg  ">
         
        <input className='border border-pink-900 ml-9 w-[300px]  bg-transparent placeholder: text-lg , placeholder: 
     text-pink-900 mt-10 rounded-sm  px-4 focus: outline-none' placeholder='Category' type='text' onChange={(e) => {
            settype(e.target.value);
          }} />

        <input className='border border-pink-900 ml-9 w-[300px] focus-outline-none bg-transparent py-1 placeholder: text-sm placeholder: text-pink-900 h-[10] mt-10 rounded-sm px-4' placeholder='img' type='file' onChange={handleFileChange} />
       
        <button className='mt-[13%] ml-[57%] border border-pink-900   hover:text-pink-800 h-9 bg-pink-900 text-white hover:bg-transparent w-24 rounded-lg' onClick={handleChange}>save</button>
      </div>
      </div>
      </div> 
      </div>
   
    
    </>

  )
}

export default CategoryModal
