import React from 'react'
import {X} from 'lucide-react'
import { Link } from 'react-router-dom'

function CategoryModal( {onClose}) {

  return (
   
     
    <div className=' mt-[5%]'>
   <div className='flex justify-center gap-32'> <h1 className='  mt-[35px]  text-3xl text-pink-900'>Add category</h1>
   <button onClick={onClose} className=' mt-[40px]'><X  className='text-pink-900' size={36} /></button>
   </div>
    <div className=" flex flex-col h-[250px] ml-[35%] w-[400px]  mt-4 border  border-pink-900 rounded-lg  ">
      
     <input className='border border-pink-900 ml-9 w-[300px]  bg-transparent py-1 mt-10 rounded-sm  px-4' placeholder='type of Category' type='text' />
    <input className='border border-pink-900 ml-9 w-[300px] bg-transparent py-1  h-[10] mt-10 rounded-sm px-4' placeholder='img' type='file'  />
    <button className='mt-[13%] ml-[57%] bg-pink-800 h-8 w-24 rounded-lg'>save</button>
    </div>
    
    </div>
    
    
  )
}

export default CategoryModal
