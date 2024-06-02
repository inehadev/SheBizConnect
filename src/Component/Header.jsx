import React from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoSearchOutline } from "react-icons/io5";

export default function Header () {
    return(
        <>
        <div className="h-12 flex justify-between " >
            <div className="mt-5">
                <h2 className="ml-14 text-xl font-family-aerial">SheBizConnect</h2>
                </div>

                <div className="flex gap5" >
                <div className="h-10 w-[600px] border border-zinc-400 mt-5 rounded-full flex justify-between items-center px-8" >
                <input type="text" className="outline-none border-none" placeholder="Search the name" />
            <IoSearch/>
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