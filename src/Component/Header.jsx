import React from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoSearchOutline } from "react-icons/io5";

export default function Header() {
    return (
        <>
            <div className="h-12 flex justify-between " >
                <div className="mt-7">
                    <h2 className="ml-14 text-2xl font-family-aerial text-pink-900 font-medium">SheBizConnect</h2>
                </div>

                <div className="flex gap5" >
                    <div className="h-10 w-[600px] border border-pink-900 mt-5 rounded-full flex justify-between items-center px-8" >
                        <input type="text" className="outline-none border-none placeholder:text-black " placeholder="Search the categories" />
                        <IoSearch className="h-6  w-8 text-pink-900 " />
                    </div>
                </div>

                <div className="mt-5" >
                    <Link className="mr-14 text-lg" href='/register'>Register</Link>
                    <Link className="mr-14 text-lg" href='/login'>Login</Link>
                </div>


            </div>
        </>
    )
}