import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function UserLogin() {
  const navigate = useNavigate(); 

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// user credentials
  const dummyUser = {
    email: "Nehalvajpai17@gmail.com",
    password: "nehal123",
  };

  // Function to handle login
  const handleLogin = () => {
    if (email === dummyUser.email && password === dummyUser.password) {
      alert("Login successful! Redirecting..."); 
      navigate("/accountcretion"); 
    } else {
      alert("Invalid email or password! Please try again.");
    
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
          <div className="form-group mt-30">
            <label className="field-title mb-5">EMAIL</label>
            <input
              type="text"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
            />
          </div>
          <div className="form-group mt-40">
            <label className="field-title mb-5">PASSWORD</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
            />
          </div>
          <div className="mt-50">
            <button className="btn btn-lg width-full" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
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
      {/* Footer */}
    </main>
  );
}

export default UserLogin;
