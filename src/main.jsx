import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';


const theme = extendTheme({
  colors: {
    pink: {
      900: "#4B5563", 
      700: "#8B5CF6",
      1200: "#1a202c",
    },
  },

  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
