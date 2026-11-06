import { useContext } from "react";
import { CartContext } from "./src/CartProvider";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";
import './src/styles/cart.scss';

function Cart() {
    const { cart, setCart } = useContext(CartContext);

    //آیتم محصول فعلی؛ آیتم دات ایدی شناسه محصول فعلی؛ آیدی شناسه محصولی که کاربر خواست حذف کنه 
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    //جمع محصولات
    //چون reduce برای زمانی خیلی مناسبه که بخواهیم چند مقدار از یک آرایه را به یک مقدار نهایی تبدیل کنیم.
    const totalprice = cart.reduce((total, item) => {
        return total + item.price;
    }, 0)
    //صفر واسه اینکه اپدیت قیمت رو از صفر شروع کنه  

    const navigate = useNavigate();
    return (

        <>
            <div className="cart-design">
                <h2> سبد خرید </h2>

                {cart.map(item => {
                    return (
                        <div key={item.id} className="each-product">
                            <img src={item.thumbnail} alt={item.title} className="img-cart" />
                            <h3 className="title-cart">{item.title}</h3>
                            <p className="price-cart">{item.price}دلار</p>

                            <button onClick={() => removeFromCart(item.id)}>حذف</button>

                        </div>)

                })}

                <h3> مجموع قیمت سبد خرید: {totalprice} </h3>
                <button onClick={() => navigate("/Checkout")} className="checkout-btn">
                    ثبت سفارش</button>
            </div>
        </>
    )
}
export default Cart; 