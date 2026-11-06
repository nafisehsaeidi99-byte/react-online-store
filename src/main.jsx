import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './CartProvider.jsx'


//کارت پرووایدر رو میاریم تو مین که تمام کامپوننت های اپ بهش دسترسی داشته باشن 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
   
  </StrictMode>,
)
