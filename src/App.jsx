import React from 'react'
import {Routes , Route ,  BrowserRouter as Router} from 'react-router-dom'


import HeroPage from './Pages/HeroPage'
import Categories from './Component/Categories'
import Register from './Component/Register'
import Login from './Component/Login'
import CategoryModal from './Component/CategoryModal'
import ProfileCard from './Pages/ProfilePage/ProfileCard'
import Profile from './Component/Card/Profile'
import VisitProfile from './Pages/ProfilePage/VisitProfile'
import BreadScrumb from './Component/BreadScrumb/BreadScrumb'
import  UpdateProfile from './Pages/ProfilePage/UpdateProfile'
import UpdateCategory from './Component/UpdateCategory'
import Header from './Component/Header'
// import VisitProfile from './Pages/ProfilePage/VisitProfile'


function App() {


  return (
    <>
    
 

    <Routes>
    
    <Route path='/' element ={<HeroPage/>} />
    <Route path='/header' element ={<Header/>} />

    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
      <Route path='/categories' element ={<Categories/>} />
      <Route path='/addcategory' element ={<CategoryModal/>} />
      <Route path='/profile' element ={<ProfileCard/>} />
      <Route path='/createprofile' element={<Profile/>}/>
      <Route path='/visitprofile' element={<VisitProfile/>} />
      <Route path='/updateprofile' element={<UpdateProfile/>}/>
      <Route path='/updateCategory' element={<UpdateCategory/>}/>
      <Route path = "/visit/:profileId" element={<VisitProfile/>}/>


    </Routes>


   
    
   
       
    </>
  )
}

export default App
