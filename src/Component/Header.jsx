import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch, IoSearchOutline } from "react-icons/io5";
import { useState , useEffect } from "react";

export default function Header() {
    const navigate=useNavigate();
    const [username , setusername]=useState('');
    useEffect (()=>{
        const name = localStorage.getItem('username');
        if(name){
            setusername(name);
        }

    },[]);

    const Logout = async ()=>{
        localStorage.removeItem('x-auth-toke');
        localStorage.removeItem('username');
        setusername('');
        navigate('/login')
    }
    return (
        <>
            <div className="h-12 flex justify-between  font-poppins" >
                <div className="mt-7">
                    <h2 className="ml-14 text-3xl font-family-aerial text-pink-900 font-medium " ><Link to = '/'>SheBizConnect</Link></h2>
                </div>

                <div className="flex gap5" >
                    <div className="h-10 w-[600px] border border-pink-900 shadow-md mt-5 rounded-full flex justify-between items-center px-8" >
                        <input type="text" className="outline-none border-none bg-transparent placeholder:text-pink-900 " placeholder="Search the categories" />
                        <IoSearch className="h-6  w-8 text-pink-900 " />
                    </div>
                </div>

                    {username ? (
                    <div className="mt-5">
                         <Link className="mr-14 text-xl text-pink-900" to='/login' onClick={Logout}>Logout</Link>
                        <span className="mr-14 text-xl text-pink-900">Welcome {username}!</span>
                       
                    </div>
                    ): (
                        <div className="mt-5" >
                    <Link className="mr-14 text-xl text-pink-900" to='/register'>Register</Link>
                    <Link className="mr-14 text-xl text-pink-900" to='/login'>Login</Link>
                </div>
                    )
                    
                    }
                


            </div>
        </>
    )
}