import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartProvider";
import Header from "./Header";
import './styles/products.scss';
// import localProducts from "./Data";
const categoryNames = {
    beauty: "زیبایی",
    fragrances: "عطر",
    furniture: "لوازم خانه",
    groceries: "مواد غذایی"
};

// آبجکت با او بزرک حتما باید و کی هم حتما باید اس جمع داشته باشه 
const categories = Object.keys(categoryNames); 

function Products () {
    
    //مربوط به ولیو داخل کارت.پرووایدر
    const { cart, setCart } = useContext(CartContext);

    const addToCart = (item) => {
        setCart([...cart , item])
        
    }
    const [products, setProducts] = useState([]);
    const [selectcategory , setSelectcategory] = useState("all");
    //آل ینی کاربر هنوز دسته بندی خاصی انتخاب نکرده و همه محصولات باید نمایش داده بشن 


    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then (res => {
        setProducts(res.data.products)
        
           
          
            
        } )

    } , [] )

    // useEffect(() => {
    //     axios.get('https://dummyjson.com/products')
    //         .then(res => {
    //             const apiProducts = res.data.products;

    //             if (apiProducts && apiProducts.length > 0) {
    //                 setProducts(apiProducts);
    //             } else {
    //                 setProducts(localProducts);
    //             }
    //         })
    //         .catch(error => {
    //             console.log("خطا در دریافت محصولات:", error);
    //             setProducts(localProducts);
    //         });

    // }, []);
    

    let filteredProducts;

    if (selectcategory === "all") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(
            item => item.category === selectcategory
            // اسم کتگوری منظورمون اسم از ای پی آی گرفتیم هست 
        )
    }

    return (

         
        <>
            <div id="top">
                <h2 id="headerproducts"> محصولات </h2>

                <div className="categories">
                    <button onClick={() =>
                        setSelectcategory("all")}>
                        همه
                    </button>
                    {categories.map((item) => (
                        <button onClick={() => setSelectcategory(item)} key={item}>
                            {categoryNames[item]}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="product-grid">
            {filteredProducts.map(item => (
                <div key={item.id} className="product-arrangement">
                   <div className="image">
                        <img src={item.thumbnail} alt={item.title} />
                   </div>
                    <h4>دسته بندی: {categoryNames[item.category]}</h4>
                    <h3>{item.title}</h3>
                    <p>{item.price}$ </p>
                   

                    <button onClick={() => { addToCart(item) }}> افزودن به سبد خرید </button>
                </div>
            ))}
            </div>
        </>
    )
}
export default  Products;
