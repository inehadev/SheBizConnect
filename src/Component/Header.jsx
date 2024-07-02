import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch, IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Card from '../Component/Card/Card'
import Filteritem from "./Filteritem";

export default function Header() {
    const [data, setData] = useState([
        { id: "1", src: "/cooking.jpg", title: "Cooking" },
        { id: "2", src: "/art.jpg", title: "Art" },
        { id: "3", src: "/makeup.jpg", title: "Style" },
        { id: "4", src: "/health.jpg", title: "Health" },
        { id: "5", src: "/digital-services.jpg", title: "Marketing" },
      ]);
    const [filter, setFilter] = useState([]);
    
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    const [username, setusername] = useState('');
 
    useEffect(() => {
        const name = localStorage.getItem('username');
        if (name) {
            setusername(name);
        }

    }, []);


   

    useEffect(()=>{
        const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilter(searchText.trim() !== '' ? filtered : []);
        setFilter(filtered);
    },[searchText , data])
     
    const Logout = async () => {

        localStorage.removeItem('x-auth-toke');
        localStorage.removeItem('username');
        setusername('');
        navigate('/login')
    }
    return (
        <>
            <div className="h-12 flex justify-between  mt-2 font-poppins" >
                <div className="mt-8">
                    <h2 className="ml-14 text-3xl font-family-aerial text-pink-900 font-medium " ><Link to='/'>SheBizConnect</Link></h2>
                </div>

                <div className="flex gap-5 " >
                    <div className="h-10 w-[600px] border border-pink-900 shadow-md focus-within:scale-110 mt-8 rounded-full flex justify-between items-center px-8" >
                        <input type="text" className="outline-none border-none bg-transparent placeholder:text-pink-900 " placeholder="Search the categories" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <IoSearch className="h-6  w-8 text-pink-900 " />
                    </div>
                </div>

                {username ? (
                    <div className="mt-8">
                        <Link className="mr-14 text-pink-900 text-xl" to='/login' onClick={Logout}>
                        <button className="hover:bg-pink-800 hover:border border-pink-900 hover:px-2 hover:py-1 hover:rounded-lg hover:text-white">Logout</button>
                        </Link>
                        <span className="mr-14 text-xl text-pink-900">Hii {username}!👋</span>

                    </div>
                ) : (
                    <div className="mt-5" >
                       <Link className="mr-14 text-xl " to='/register' >
                        <button className="hover:bg-pink-800 hover:border border-pink-900 hover:px-2 hover:py-1 hover:rounded-lg hover:text-white">Register</button>
                        </Link>
                        <Link className="mr-14 text-xl " to='/login' >
                        <button className="hover:bg-pink-800 hover:border border-pink-900 hover:px-2 hover:py-1 hover:rounded-lg hover:text-white">Login</button>
                        </Link>
                    </div>
                )

                }

 

            </div>
             
            {searchText.trim() !== "" && <Filteritem filter={filter} />} 

      
        </>
    )
}