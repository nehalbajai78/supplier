import React, { useState ,useEffect} from "react";
import { useNavigate,useLocation,Link } from "react-router-dom"; 
import { useSelector,useDispatch } from "react-redux";
import { encrypt,generateRandomIv,generateRandomSalt } from "../../util/aesUtil";
import { doLogin ,emailVerification} from "./authSlice";

function UserLogin() {

  console.log("Rendering Login Component");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const paramValue = queryParams.get("actCode");

  const { token, status, loginError } = useSelector((state) => state.auth);
  console.log("token",token);
  
  console.log(loginError);
  console.log("ststus" ,status);
  
  // const isSubmitting = navigation.state === "submitting";
  // const formErrors = useActionData();

  const [username, setUsername] = useState("");
  const [usernameErrMsg, setUsernameErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const Notification = () => (
    <div className="notification">
      <a className="cross" onClick={hideNotification}></a>
      <p className="fs-16 color-green mb-10">Account Activation Successful.</p>
      <p className="fs-12 color-black">
        Email Verified Successfully. Please login to continue..
      </p>
    </div>
  );
  const hideNotification = () => {
    setShowNotification(!showNotification);
  };
  // const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (paramValue) {
      dispatch(emailVerification({ actCode: paramValue }))
        .unwrap()
        .then((result) => {
          if (result) {
            setShowNotification(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch, paramValue]);

  useEffect(() => {
    setUsernameErrMsg(loginError.usernameErrMsg);
    setPasswordErrMsg(loginError.passwordErrMsg);
  }, [status, loginError]);

  useEffect(() => {
    setUsernameErrMsg("");
    setPasswordErrMsg("");
  }, [username, password]);

  useEffect(() => {
    console.log("hdhhd",status);
    if (status === "loginsuccess" || status === "authenticated") {
      if (token !== null) {
        console.log(token);
        
       
        navigate("/accountcretion");
      } 
      else {
        navigate("/validate-otp");
      }
    }
  }, [status]);

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   if (status !== "locked" || status !== "authenticated") {
  //     if (
  //       username === ""
  //       //       || !isValidEmail(username)
  //     ) {
  //       setUsernameErrMsg("Invalid username");
  //       return;
  //     }
  //     if (password === "") {
  //       setPasswordErrMsg("Invalid password");
  //       return;
  //     }
  //     // encrypt
  //     const iv = generateRandomIv();
  //     const salt = generateRandomSalt();
  //     const cipherText = encrypt(password, iv, salt);
  //     const aesPassword = iv + "::" + salt + "::" + cipherText;
  //     console.log("Aes Password String :" + aesPassword);

  //     // call api for login here
  //     dispatch(doLogin({ username, password }),
  //   // navigate("/accountcretion")
    
  //   );
  //     // setUsername("");
  //     setPassword("");
  //   }
  // };

  

// user credentials
 
const handleFormSubmit = async (e) => {
  e.preventDefault();

  if (status !== "locked" && status !== "authenticated") {  
    if (username === "") {
      setUsernameErrMsg("Invalid username");
      return;
    }
    if (password === "") {
      setPasswordErrMsg("Invalid password");
      return;
    }

    // Encrypt the password
    const iv = generateRandomIv();
    const salt = generateRandomSalt();
    const cipherText = encrypt(password, iv, salt);
    const aesPassword = iv + "::" + salt + "::" + cipherText;
    console.log("Aes Password String :" + aesPassword);

    try {
      // Call API for login
      const result = await dispatch(doLogin({ username, password })).unwrap();

      console.log("Login Result:", result);

      if (result.token) {
        // If token is present, navigate to account creation
        navigate("/accountcretion");
      } else {
        // If token is missing, navigate to validate OTP
        navigate("/accountcretion");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setUsernameErrMsg("Invalid credentials");
      setPasswordErrMsg("Invalid credentials");
    }

    setPassword("");
  }
};



  return (
    <main id="wrapper">
      {/* Header */}
      <div ui-view="header">
        <header hide-in-app="">
          <nav className="navbar navbar-default dropdown">
            <div className="container-fluid large-menu">
              <div className="navbar-header">
                <a target="_self" href="#">
                  <picture className="navbar-brand">
                    <source srcSet="images/escortskubota.png" type="image/webp" />
                    <img src="images/escortskubota.png" alt="logo" />
                  </picture>
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* Header */}
      {/* Content */}
      <section className="flex-container">
        <section className="width-half pl-50 pr-50 bg-white min-viewport-height">
          <h3 className="mt-110 fs-48">
            <span className="color-red">Get Your Business</span> <br /> Escorts
            Kubota Advantage
            <p className="fs-20 color-grey mt-15">
              Come partner with us and see your business grow
            </p>
          </h3>
        </section>
        <section className="width-half pl-80 pb-80 pr-250">
          <h3 className="mt-120 fs-36 mb-50">
          Supplier Login
            <p className="fs-20 mt-5">Please enter your credentials</p>
          </h3>
          <form onSubmit={handleFormSubmit}>
          <div className="form-group mt-30">
            <label className="field-title mb-5">EMAIL</label>
            <input
              type="text"
              placeholder="Enter email address"
             autoComplete="off"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {
            usernameErrMsg !== "" && (
              <div>
                 <span className=" fs-14 error-lS" style={{color:"red"}}>
                        {usernameErrMsg}
                      </span>
              </div>
            )
          }
          <div className="form-group mt-40">
            <label className="field-title mb-5">PASSWORD</label>
            <input
              type="password"
              placeholder="Enter Password"
              // Update state
              value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {
            passwordErrMsg !== "" && (
              <div>
                 <span className=" fs-14 error-lS" style={{color:"red"}}>
                        {passwordErrMsg}
                      </span>
              </div>
            )
          }
          <div className="mt-50">
             <button
                className="btn btn-lg width-full"
                // disabled={status === "submitting"}
              >
                {status === "submitting" ? "Login..." : "Login"}
              </button>
            </div>
            {loginError.loginErrorMessage !== "" && (
              <div className="color-red">
                <span>{loginError.loginErrorMessage}</span>
              </div>
            )}
          </form>
          {/* <div className="mt-50">
            <button className="btn btn-lg width-full" >
              LOGIN
            </button>
          </div> */}
          <p className="fs-12 mt-25">
            <a href="/forgotPWD" className="color-grey">
              Forgot Credentials?
            </a>
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="fs-12 mt-25 color-grey">New to EscortsKubota Partners</p>
            <i className="fs-12 mt-25 icon-size-20">
              <a href="/signup" className="color-grey">Signup</a>
            </i>
          </div>
        </section>
      </section>
      {/* Content */}

      {/* Footer */}
      <footer className="">
        <div className="container-fluid">
          <div className="pull-left">
            <a href="#" className="fs-14 color-black">HELP CENTER</a>
            <a href="#" className="fs-14 color-black pl-50">
              VISIT ESCORTSKUBOTA.COM
            </a>
          </div>
          <p className="pull-right fs-12 color-black">
            Escorts Kubota Limited 2024 - All Rights Reserved.
          </p>
        </div>
      </footer>
      {showNotification ? <Notification/> : null}
      {/* Footer */}
    </main>
  );
}

export default UserLogin;
