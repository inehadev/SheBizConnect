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
    <Box className= "bg-pink-200"  h="100vh">
    
    <Routes>
     
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
      <Route path='/' element ={<HeroPage/>} />
      <Route path='/categories' element ={<Categories/>} />

    </Routes>
    
    </Box>
       
    </>
  )
}

export default App
