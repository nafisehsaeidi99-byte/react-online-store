import { Navigate } from "react-router-dom";
//چیلدرن حکم پراپس رو داره؛ توی کامپوننت اپ چیلدرن رو صفحه محصولات مشخص کردیم 
function ProtectedRoute ({children}) {
  
    const isLogin = localStorage.getItem("isLogin")
    
    if (!isLogin == "true") {
        return <Navigate to = "/" />;
    }
    // حالا مییگیم اگر اطلاعات وارد شده درست بود برو صفحه محصولات 
   return children; 
}

export default ProtectedRoute; 