import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';


function Profile() {
  const[title , settitle]=useState('');
  const[file , setfile]=useState('');
  const[type , settype]=useState('');
  const[location,setlocation]=useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [SelectedOption ,setSelectedOption]=useState('');
  const navigate = useNavigate();

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





  const handleOptionChange = (e) => {
    console.log('working')
    setSelectedCategory(e.target.value);
    const selectedCategoryId = e.target.value; // Assuming value is category _id
    console.log('Selected category ID:', selectedCategoryId);
};

 function previewfile(file){
    const reader = new  FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      setfile(reader.result);
      console.log(reader.result);

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
  const handleChange=async()=>{
    const token = localStorage.getItem('x-auth-token');
    try {
      
        const selectedCategoryObj = categories.find(category => category._id === selectedCategory);

        if (!selectedCategoryObj) {
            console.error('No category selected.');
            return;
        }
      const bodyParameter = {
       
       
        title: title,
        img: file,
        type: type,
        location: location,
        categoryId: selectedCategoryObj._id,
        categoryType: selectedCategoryObj.CategoryType
      }

      const axiosheader = {
        headers:{
            "Accept":"application/json",
            'x-auth-token':token,
        }
      }

    const response = await axios.post('http://localhost:4000/create' , bodyParameter , axiosheader);
    console.log(response);
    navigate('/profile')
    
      
    } catch (error) {
      console.log({"error in create profile integration" : error});
    
    }
  }
  return (
    <>
      <div className="text-4xl  text-pink-900 ml-[40%] mt-10 font-poppins">
        <Link href="/">SheBizConnect</Link>
      </div>

      <div className='border border-pink-900 w-[400px] h-[390px] justify-center ml-[35%] mt-14 rounded-md'>
      <div className="text-2xl text-pink-900 ml-[30%] mt-3 font-poppins">Create Profile</div>
        <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className='justify-center w-full h-7 px-5 focus:outline-none bg-transparent  placeholder:text-pink-900 placeholder:text-sm ' type="text" placeholder='Enter your title '
        onChange={(e)=>settitle(e.target.value)} /></div>
        <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className=' w-full px-5 focus:outline-none bg-transparent py-[2.5px] placeholder: text-sm placeholder: text-pink-900   rounded-sm ' placeholder='img' type='file' onChange={handleFileChange}
      /></div>
        <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className='  w-full px-5 focus:outline-none bg-transparent py-[2.5px] placeholder:text-sm placeholder:text-pink-900   rounded-sm  ' placeholder='Type of Food' type='text'
        onChange={(e)=>settype(e.target.value)} /></div>
        <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className='  w-full px-5 focus:outline-none bg-transparent py-[2.5px] placeholder:text-sm placeholder:text-pink-900   rounded-sm  ' placeholder='Enter Your Location' type='location'
        onChange={(e)=>setlocation(e.target.value)} /></div>

<div className='ml-8 mt-6 border border-pink-900 mr-14'>
                    <select className='w-full px-5 focus:outline-none bg-transparent py-[2.5px] placeholder:text-sm placeholder:text-pink-900 rounded-sm'
                        onChange={handleOptionChange}>
                       
                       {categories.map(category => (
                    <option key={category._id} value={category._id}>
                        {category.CategoryType}
                    </option>
                ))}
                    </select>
                </div>




         <div className='ml-8 mt-6  mr-14'>  <button className=" border bg-pink-900  w-full text-white px-4 py-1 hover:bg-transparent hover:text-pink-900 hover:border border-pink-900  rounded-full"onClick={handleChange}  >Create</button> </div>
       


      </div>


    </>
  )
}

export default Profile
