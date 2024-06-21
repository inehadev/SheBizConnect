import React from 'react'
import Header from '../../Component/Header'

function ProfileCard() {
    const data = [
        {id:'1 ', src: '/nan.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'},
        {id:'2', src: '/burger.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'},
        {id:'3 ', src: '/sandwich.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'},
        {id:'4', src: '/paneer.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'},
        {id:'5 ', src: '/sandwich.jpg ' , title :'Tasty & Spicy Food ' , rating:'3.4⭐' , type:'Dining' , category:'North Indian, South Indian, fast food', location:'Town hall ,  Amritsar'}
        
        
    ]

    return (

        <>
            <Header />
          <div className=' '><button className='place-item-end ml-[87%] mt-10 hover:text-white border border-pink-900 hover:bg-pink-900 px-2 py-1 rounded-md font-medium'>Create Profile</button></div>
      <div className='flex flex-wrap justify-center gap-8 mt-14'>
        {data.map((item)=>(

          <div   className='bg-gray-100 ml-9   '>
                <div key={item.id} className='  rounded-sm'>
                    <img className='h-[200px] rounded-lg border  border-pink-900 border-2px
                    ' src={item.src} alt="" />
                </div>
                <div className='ml-5 mt-2 '>
                    <h3 className='text-xl font-medium  text-pink-900 '>{item.title}</h3>
                    <span className='  px-1 rounded-lg'>{item.rating}</span>
                    <span className='font-normal ml-2'>Dining</span>
                    <p className='mt-1'> {item.category}</p>
                    <p className='mt-1 mb-3'>{item.location}</p>

                </div>


            </div>
            ) )}
            </div>
        </>
    )
}

export default ProfileCard