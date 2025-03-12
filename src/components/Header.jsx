import React ,{useState,useEffect} from 'react'
import { doLogout } from '../features/auth/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate ,Link } from 'react-router-dom'



function Header() {
const navigate = useNavigate();
const dispatch =useDispatch();
  const { logoutStatus ,logoutApiStatus } = useSelector((state) => state.auth);



  const handleLogout = () => {
    dispatch(doLogout());
    if (logoutStatus == "logoutSuccessfull") {
      if (logoutApiStatus === 200) {
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
      }
    }
  };
  return (
    <>
     <div ui-view="header">
    <header hide-in-app="">
      <nav className="navbar navbar-default">
        <div className="container-fluid large-menu">
          <div className="navbar-header mt-20">
            <a target="_self" href="/login">
              <picture className="navbar-brand">
                <source srcSet="/images/escortskubota.png" type="image/webp" />
                <img src="/images/escortskubota.png" alt="logo" />
              </picture>
            </a>
          </div>
          <div className="pull-right nav-icon-navbaar mt-10">
            <Link onClick={handleLogout}  className="color-red">
              <img src="images/ic-logout.png" width="30px" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  </div>
    
    </>
  )
}

export default Header