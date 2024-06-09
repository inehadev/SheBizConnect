import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { authProvider } from './Context/AuthContext.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <BrowserRouter>
     
        <App />
     
    </BrowserRouter>
   
  </React.StrictMode>,
);



