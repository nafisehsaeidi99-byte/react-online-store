import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './src/styles/register.scss'
import './src/styles/Styles.scss'
function Register() {
    
    const [username , setUsername ] = useState('');
    const [phone, setPhone] = useState('');
    const [password , setPassword] = useState('');
    //
    const navigate = useNavigate();

    const [usernameError, setUsernameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const usernameHandler = () => {
        if (username.length <2 ) {
            setUsernameError("!نام کاربری باید حداقل 2 حرف باشد")
           
        } else {
            setUsernameError("")
        }
    }

    const phoneHandler = () => {
        if (!/^[0-9]+$/.test(phone)) {
            setPhoneError("!فقط عدد وارد شود");
            return;
        }

        if (phone.length !== 11) {
            setPhoneError("!شماره باید 11 رقم باشد");
            return;
        }
        setPhoneError("");
    }
    
    const passwordHandler = () => {
        if (password.length <8) {
            setPasswordError("!رمز عبور ضعیف است")

        } else { 
            setPasswordError("")

        }
    }
    //  این واسه اینه که کاربر هربار مقدار جدیدی رو تایپ کرد استیت مقدارش رو ذخیره کنه در حقیقت واسه وقتیه که روی دکمه کلیک میکنی
    const handleRegister = () => {

        if (username.length < 2) {
            setUsernameError("!نام کاربری باید حداقل 2 حرف باشد");
            return;
        }

        if (!/^[0-9]+$/.test(phone)) {
            setPhoneError("!فقط عدد وارد شود");
            return;
        }

        if (phone.length !== 11) {
            setPhoneError("!شماره باید 11 رقم باشد");
            return;
        }
        

        if (password.length < 8) {
            setPasswordError("!رمز عبور ضعیف است");
            return;
        }

        //اگر همه شروط درست بود تمام خطاها پاک بشه 
        setUsernameError("");
        setPhoneError("");
        setPasswordError("");

        //اینجا آبجکت ساختیم . اسمی که به کانست اینجا میدی باید دقیقا همنام با اسمی باشه که به استرینگیفای میدی
        const user = {
            username,
            phone,
            password,    
        };


        //لوکال استورج فقط استرینگ ذخیره میکنه ولی چون ما داریم آبجکت بهش میدیم باید حتما استرینگش کنیم وگرنه هر داده ای بهش بدیم بهمون object object برمیگردونه 
        localStorage.setItem("NewUser", JSON.stringify(user));

        navigate("/");
    }

    return (
        <>
            <div className="registerpage">
        <form action="">
          <h2>ثبت نام</h2>
            
            <input type="text" placeholder="نام کاربری" id="Name" className="" onChange={(e) => setUsername(e.target.value)}  onBlur={usernameHandler} />
            {/* نشون دادن خطا اگر یوزرنیم ارور اند نزاریم حتی اگر خطایی نداشته باشیم یه کادری اون پایین میاد که جالب نیست  */}
            {usernameError && <p className="regnameerr">{usernameError}</p>}

            <input type="tel" placeholder="شماره موبایل" id="Phone" className="" onChange={(e) => setPhone(e.target.value) } onBlur={phoneHandler} />
            {phoneError && <p className="regphoneerr">{phoneError}</p>}

            <input type="password" placeholder="رمز عبور" id="Password" className="" onChange={(e) => setPassword(e.target.value)}  onBlur={passwordHandler} />
            {passwordError && <p className="regpasserr">{passwordError}</p> }
            
            <button type="button" onClick={handleRegister} >ثبت نام</button>
            </form>
            </div>
        </>
    ) 
}
    


export default Register; 