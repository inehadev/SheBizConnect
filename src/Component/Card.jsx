import React from "react";

export default function (){

    const data = [
        { id: '1', src: "/cooking.jpg", title: "Cooking" },
        { id: '2', src: "/art.jpg", title: "Art" },
        { id: '3', src: "/makeup.jpg", title: "Style" },
        { id: '4', src: "/health.jpg", title: "Health" },
        { id: '5', src: "/digital-services.jpg", title: "Marketing" },
    ]
    return (
       <div className="mt-10 flex  flex-wrap justify-start">
        {data.map((item)=>(
             <div className="flex gap-14 ">

             <div key={item.id} className=  " border  border-pink-900  rounded-xl mt-10 h-[200px]  ml-14  mb-7 ">
             <img className="  border  border-pink-900  h-[160px]  rounded-xl "  src={item.src} alt="img" />
             <p className="text-xl mt-2 text-pink-900 shadow-md  ml-7 font-weigh-5 " > {item.title}</p>
             </div>
           
            {/* <div className=  "   border border-pink-900  rounded-md mt-10 h-[200px]  bg-pink-900">
             <img className="  border border-pink-900   h-[160px]  "  src="/art.jpg" alt="img" />
             <p className="text-xl mt-2 text-black ml-7 " >Art</p>
             </div>
     
             <div className=  "  border border-pink-900  rounded-md mt-10 h-[200px]  bg-pink-900 ">
             <img className=" border border-pink-900  h-[160px]  "  src="/makeup.jpg" alt="img" />
             <p className="text-xl mt-2 text-black ml-7 " >Style</p>
             </div>
           
             <div className=  "  border border-pink-900  rounded-md mt-10 h-[200px]  bg-pink-900  ">
             <img className=" border border-pink-900   h-[160px]  "  src="/health.jpg" alt="img" />
             <p className="text-xl mt-2 text-black ml-7 " >Health</p>
             </div>
     
             <div className=  " border border-pink-900 rounded-md mt-10 h-[200px]   bg-pink-900 ">
             <img className="  border border-pink-900    h-[160px]  "  src="/digital-services.jpg" alt="img" />
             <p className="text-xl mt-2 text-black ml-7 " >Marketing</p>
             </div>
      */}
            </div>
    ))}
       </div>
    )
}