// import React from "react";
// import { Link , useLocation } from "react-router-dom";

// const BreadScrumb =()=>{
//     const {pathname} = useLocation();
//      const pathnames=pathname.split("/").filter((x)=>x);
//     console.log(location);
//     let breadScrumb="";
//     return(
//        <div className="mt-14 ml-28 text-lg text-pink-900 font-poppins opacity-75">
//          <Link to={'/'}>Home</Link>
//         {pathnames.map(( name , index)=>{
           
//             breadScrumb+= `/${name}`;
//             const isLast =index=== pathnames.length-1;
//             return  isLast ?<span key={breadScrumb}>/{name}</span>:(
//                 <span key={breadScrumb}>/<Link to={breadScrumb}>{name}</Link></span>
//             )

//         })}
       
//        </div>
//     )
// }

// export default BreadScrumb;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BreadScrumb = () => {
  const { pathname } = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([{ name: 'Home', path: '/' }]);

  useEffect(() => {
    // Get the current pathnames
    const pathnames = pathname.split("/").filter((x) => x);
    // Create a list of breadcrumb objects from the pathnames
    const currentPath = pathnames.map((name, index) => {
      return { name, path: `/${pathnames.slice(0, index + 1).join("/")}` };
    });

    // Get the current breadcrumb state from local storage or initialize with 'Home'
    const storedBreadcrumbs = JSON.parse(localStorage.getItem('breadcrumbs')) || [{ name: 'Home', path: '/' }];
    // Find the index of the current path in the stored breadcrumbs
    const index = storedBreadcrumbs.findIndex(crumb => crumb.path === pathname);

    let updatedBreadcrumbs;
    if (index === -1) {
      // If the current path is not in the stored breadcrumbs, add it
      updatedBreadcrumbs = [...storedBreadcrumbs, ...currentPath];
    } else {
      // If the current path is in the stored breadcrumbs, truncate after this path
      updatedBreadcrumbs = storedBreadcrumbs.slice(0, index + 1);
    }

    // Update the breadcrumbs state and save it to local storage
    setBreadcrumbs(updatedBreadcrumbs);
    localStorage.setItem('breadcrumbs', JSON.stringify(updatedBreadcrumbs));
  }, [pathname]);

  return (
    <div className="mt-14 ml-28 text-lg text-pink-900 font-poppins opacity-75">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return isLast ? (
          <span key={crumb.path}>/{crumb.name}</span>
        ) : (
          <span key={crumb.path}>/<Link to={crumb.path}>{crumb.name}</Link></span>
        );
      })}
    </div>
  );
};

export default BreadScrumb;




