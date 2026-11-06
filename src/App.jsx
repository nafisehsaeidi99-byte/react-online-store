import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'
import Home from '../Home'
import ProtectedRoute from '../ProtectedRoute'
import Products from './Products'
import Cart from '../Cart'
import Header from './Header'
import Checkout from '../Checkout'


function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
    
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Header />
              <Products />
             
            
            </ProtectedRoute>
          }
        />

        <Route path='/cart' element = { <ProtectedRoute> <Cart /> </ProtectedRoute> } />
        
        <Route path='/checkout' element={<ProtectedRoute> <Checkout /> </ProtectedRoute> } />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
