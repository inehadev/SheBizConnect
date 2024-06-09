import React from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoSearchOutline } from "react-icons/io5";

export default function Header() {
    return (
        <>
            <div className="h-12 flex justify-between  font-poppins" >
                <div className="mt-7">
                    <h2 className="ml-14 text-3xl font-family-aerial text-pink-900 font-medium"><Link to = '/'>SheBizConnect</Link></h2>
                </div>

                <div className="flex gap5" >
                    <div className="h-10 w-[600px] border border-pink-900 shadow-md mt-5 rounded-full flex justify-between items-center px-8" >
                        <input type="text" className="outline-none border-none bg-transparent placeholder:text-pink-900 " placeholder="Search the categories" />
                        <IoSearch className="h-6  w-8 text-pink-900 " />
                    </div>
                </div>

                <div className="mt-5" >
                    <Link className="mr-14 text-xl text-pink-900" to='/register'>Register</Link>
                    <Link className="mr-14 text-xl text-pink-900" to='/login'>Login</Link>
                </div>


            </div>
        </>
    )
}