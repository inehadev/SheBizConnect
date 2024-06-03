import{Box} from '@chakra-ui/react'
import {Routes , Route ,  BrowserRouter as Router} from 'react-router-dom'
import Header from './Component/Header'
import HeroPage from './Pages/HeroPage'
import Categories from './Component/Categories'
import Register from './Component/Register'
import Login from './Component/Login'

function App() {


  return (
    <>
    
   
    <Routes>
     
    <Route path='/' element ={<HeroPage/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
      <Route path='/categories' element ={<Categories/>} />

    </Routes>
    
    
       
    </>
  )
}

export default App
