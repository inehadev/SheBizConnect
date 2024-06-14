import React, { Children, createContext, useEffect, useState } from "react";
import axios  from 'axios'

const authContext = createContext();
const authProvider =({children})=>{

    const [user , setuser]=useState(false);
    useEffect (()=>{
        const token = localStorage.getItem('x-auth-token');
        if(token){
            setuser(true);
        }
    },[])

      
    return <authContext.Provider value={user}>{children}</authContext.Provider>
}


 export {authContext , authProvider}