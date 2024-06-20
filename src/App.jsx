import {Routes , Route ,  BrowserRouter as Router} from 'react-router-dom'

import Header from './Component/Header'
import HeroPage from './Pages/HeroPage'
import Categories from './Component/Categories'
import Register from './Component/Register'
import Login from './Component/Login'
import CategoryModal from './Component/CategoryModal'
import Profile from './Pages/ProfilePage/Profile'


function App() {


  return (
    <>
    


    <Routes>
     
    <Route path='/' element ={<HeroPage/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
      <Route path='/categories' element ={<Categories/>} />
      <Route path='/addcategory' element ={<CategoryModal/>} />
      <Route path='/profile' element ={<Profile/>} />


    </Routes>
   
    
   
       
    </>
  )
}

export default App
