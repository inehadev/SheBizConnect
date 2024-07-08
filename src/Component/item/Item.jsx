import React from "react";

const Item = ()=>{
    return(
       <>
       <div className="h-[110px] ml-[10%]   flex-col flex-wrap  ">

        <div className="flex h-[150px] gap-6 ">
      <img  className=" w-[200px] object-cover rounded-md"   src="/snacks3.jpg" alt="" />
       <div className="flex flex-col gap-2">
        <span className="text-2xl font-poppins text-pink-900 ">Veg kurkure lolipop</span>
       <span>⭐⭐⭐⭐</span>
       <span>$80</span>
       <span className="text-pink-900 font-poppins">Super tasty , curunchy & yummy veg kurkure lollipops</span>
       </div>
       </div>

       <div className="flex h-[150px] gap-6 mt-6">
      <img  className=" w-[200px] object-cover rounded-md"   src="/nan.jpg" alt="" />
       <div className="flex flex-col gap-2">
        <span className="text-2xl font-poppins text-pink-900 ">Cheese Butter Naan </span>
       <span>⭐⭐⭐⭐</span>
       <span>$80</span>
       <span className="text-pink-900 font-poppins" >Super tasty  & yummy Butter Naan with Chesse</span>
       </div>
       </div>

       <div className="flex h-[150px] gap-6 mt-6">
      <img  className=" w-[200px] object-cover rounded-md"   src="/snacks1.jpg" alt="" />
       <div className="flex flex-col gap-2">
        <span className="text-2xl font-poppins text-pink-900 ">Moutwatering Crunchy Springroll</span>
       <span>⭐⭐⭐⭐</span>
       <span>$120</span>
       <span  className="text-pink-900 font-poppins" >Super tasty , curunchy & yummy veg rolls</span>
       </div>
       </div>

       <div className="flex h-[150px] gap-6 mt-6">
      <img  className=" w-[200px] object-cover rounded-md"   src="/snacks2.jpg" alt="" />
       <div className="flex flex-col gap-2">
        <span className="text-2xl font-poppins text-pink-900 ">Delicious Potato Bites</span>
       <span>⭐⭐⭐⭐</span>
       <span>$80</span>
       <span  className="text-pink-900 font-poppins" >Super tasty , curunchy & yummy Potato Bites</span>
       </div>
       </div>

       

       </div>
       </>
    )
}
export default Item