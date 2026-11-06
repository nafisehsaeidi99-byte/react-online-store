import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { useNavigate } from "react-router-dom";
import './styles/header.scss'

function Header () {
    const {cart} = useContext(CartContext);
    const navigate = useNavigate();
    return (
      <header>
          <h2 id="mystore">
            فروشگاه من
          </h2>
          <div id="box">
             سبد خرید🛒: {cart.length}
          </div>
          <button onClick={()=> {navigate("/cart")}  } id="seebox"> مشاهده سبد خرید </button>
      </header>
    )
}

export default Header; 