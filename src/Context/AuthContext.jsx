import React, { Children, createContext } from "react";
import axios  from 'axios'

const authContext = createContext();
const authProvider =({children})=>{

    const register = async(name, username , email , password)=>{
        try {
            const bodyparameter ={
                name:name ,
                username:username,
                email:email,
                password:password
            
            }

            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                }
            }

            const response = await axios.post('http://localhost:4000/register' ,  bodyparameter ,  axiosheader );
            console.log(response.data);
            
        } catch (error) {
            console.log("error")
            
        }
    }
    return <authContext.Provider value={register}>{children}</authContext.Provider>
}


 export {authContext , authProvider}