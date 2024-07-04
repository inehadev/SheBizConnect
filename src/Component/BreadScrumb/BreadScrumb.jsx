import React from "react";
import { Link , useLocation } from "react-router-dom";

const BreadScrumb =()=>{
    const {pathname} = useLocation();
     const pathnames=pathname.split("/").filter((x)=>x);
    console.log(location);
    let breadScrumb="";
    return(
       <div className="mt-14 ml-28 text-lg text-pink-900 font-poppins opacity-75">
         <Link to={'/'}>Home</Link>
        {pathnames.map(( name , index)=>{
           
            breadScrumb+= `/${name}`;
            const isLast =index=== pathnames.length-1;
            return  isLast ?<span key={breadScrumb}>/{name}</span>:(
                <span key={breadScrumb}>/<Link to={breadScrumb}>{name}</Link></span>
            )

        })}
       
       </div>
    )
}

export default BreadScrumb;