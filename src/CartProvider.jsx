import { createContext, useState } from "react";

// اینو اینجا اکسپورتش کردم که بعد برم و تو صفحه محصولات بگیرمش 
export const CartContext = createContext();

function CartProvider({ children }) {
    //من cart و setCart را داخل Context می‌گذارم تا کامپوننت‌های داخل Provider بتوانند از آنها استفاده کنند.
    const [cart , setCart] = useState([]);

    return (
        
        <CartContext.Provider value={{cart , setCart}} >
          {children}
        </CartContext.Provider>
       
    )
}

export default CartProvider; 