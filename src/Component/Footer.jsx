import React from "react";

const Footer = ()=>{

    return(

        <>
        
       
        <div className="h-[320px] bg-rose-50 bg-opacity-40  ">
          <div className="flex justify-around">
            <span className="mt-[2%] mr-[25%] text-pink-900 font-poppins text-2xl">SheBizzConnect</span>
         <div className="flex  ">
          <div className="flex">
            <div className="flex-col mr-16">            
           <ul className="mt-5 text-gray-500 font-poppins  text-md">Features</ul>
           <ul className="mt-1 text-gray-500 font-poppins  text-md">Overviews</ul>
           <ul className="mt-1 text-gray-500 font-poppins  text-md">Prices</ul>
           <ul className="mt-1 text-gray-500 font-poppins  text-md">Tutorials</ul>
           <ul className="mt-1 text-gray-500 font-poppins  text-md">Category</ul>
            </div>

            
            <div className=" ml-14">            
           <ul className="mt-5 text-gray-500 font-poppins  text-md">Solutions</ul>
           <ul className="mt-1 text-gray-500 font-poppins  text-md">Releases</ul>
           <ul className="mt-1 text-gray-500 font-poppins  text-md">Contact</ul>
           <ul className="mt-1 text-gray-500 font-poppins  text-md">Support</ul>
           <ul className="mt-1 text-gray-500 font-poppins  text-md">Profile</ul>
           </div>
           </div>
            
            
           

          </div>
          </div>
          <hr className=" border-pink-900 mt-10   opacity-20  drop-shadow-md  mx-32" />

          <div className="flex justify-around ml-7">
            <div>
                <h4 className="text-gray-800 font-poppins mt-7  text-lg">Empowering Women Entrepreneurs</h4>
                <span className="flex-col  font-popins text-gray-500   mt-7">Connect with like-minded women and grow together with SheBizConnect</span>
            </div>
            <div className="text-center text-gray-500 mt-14 text-sm">
                 &copy; 2024 SheBizConnect. All rights reserved.
             </div>
          </div>
          
        </div>

        
        
        </>
    )

}

export default Footer;