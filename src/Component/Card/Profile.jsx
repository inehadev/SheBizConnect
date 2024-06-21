import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
        <>
        <div className="text-4xl text-pink-900 ml-[40%] mt-10 font-poppins">
        <Link href="/">SheBizConnect</Link>
    </div>

    <div className='border border-pink-900 w-[400px] h-[300px] justify-center ml-[35%] mt-14 rounded-md'>

       <div className='ml-8 mt-6 border border-pink-900 mr-14'> <input className='justify-center w-full h-7 px-5 focus:outline-none bg-transparent  ' type="text" placeholder='Enter your title ' /></div>
       <div className='ml-8 mt-6 border border-pink-900 mr-14 h-7'> <span className='px-6 text-pink-900'>Upload file<input className='justify-center w-full h-7 px-5 focus:outline-none bg-transparent  ' type="file" hidden placeholder='Enter banner ' /></span></div>
    </div>


        </>
  )
}

export default Profile
