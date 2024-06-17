import React from 'react'
import { Link } from 'react-router-dom'
const Filteritem = ({filter}) => {
  return (
    <Link to={'/categories'}>
    <div className="mt-10 flex  flex-wrap justify-center gap-14">
      
     { filter.map((item)=>(
          <div className="flex  ">

          <div key={item.id} className=  " border  border-pink-900  rounded-xl mt-10 h-[200px]    mb-7 ">
          <img className="  border  border-pink-900  h-[160px]  rounded-xl "  src={item.src} alt="img" />
          <p className="text-xl mt-2 text-pink-900 shadow-md  ml-7 font-weigh-5 " > {item.title}</p>
          </div>
        
         </div>
 ))}
    </div>
    </Link>
  )
}

export default Filteritem
