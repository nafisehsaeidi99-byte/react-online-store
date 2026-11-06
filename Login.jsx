import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './src/styles/Login.scss'

  
 function Login () {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [phoneerr, setPhoneerr] = useState('');
    const [passworderr, setPassworderr] = useState('');
    const savedUser = JSON.parse(localStorage.getItem("NewUser"))
    const navigate = useNavigate() 

    const handleLogin = () => {
       if (!savedUser) {
         navigate('/register')
         return;

      }
       if (savedUser.phone !== phone) {
          setPhoneerr('!شماره وارد شده اشتباه است')
          return;
       }


       if (savedUser.password !== password) {
          setPassworderr('!رمز عبور اشتباه است')
          return;
       }
       
       //اگه همه شرایط برقرار بودش 
      localStorage.setItem("isLogin" , "true")
      navigate("/products")
       
    }

   return (
      <>
      <div className="loginpage">
         <form action="" method="post">

            <h2>
               ورود به حساب کاربری
            </h2>

            <input type="tel" placeholder=" شماره موبایل" id="phone" className="" onChange={(e) => setPhone(e.target.value)} />
            {phoneerr && <p className="phoneerrstyle">{phoneerr}</p>}

            <input type="password" placeholder="رمز عبور" id="password" className="" onChange={(e) => setPassword(e.target.value)} />
            {passworderr && <p className="passerrstyle">{passworderr}</p>}

            <a href="" id="">رمز عبور را فراموش کرده اید؟</a>
            <button onClick={handleLogin} type="button"> ورود </button>
            
            
               <p className="register1"> حساب کاربری ندارید؟ </p>
                  <Link to="/register">
                     ثبت نام کنید
                  </Link>
           
         </form>
         </div>
      </>
   )
 }

 export default Login;  