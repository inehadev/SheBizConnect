import {Routes , Route ,  BrowserRouter as Router} from 'react-router-dom'


import HeroPage from './Pages/HeroPage'
import Categories from './Component/Categories'
import Register from './Component/Register'
import Login from './Component/Login'
import CategoryModal from './Component/CategoryModal'
import ProfileCard from './Pages/ProfilePage/ProfileCard'
import Profile from './Component/Card/Profile'


function App() {


  return (
    <>
    


    <Routes>
     
    <Route path='/' element ={<HeroPage/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
      <Route path='/categories' element ={<Categories/>} />
      <Route path='/addcategory' element ={<CategoryModal/>} />
      <Route path='/profile' element ={<ProfileCard/>} />
      <Route path='/createprofile' element={<Profile/>}/>


    </Routes>
   
    
   
       
    </>
  )
}

export default App
