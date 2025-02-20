import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [showEmailInput, setShowEmailInput] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("Yes");

  const dummyUser = {
    email: "Nehalvajpai17@gmail.com",
   
  };

  // Handles select dropdown change
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setShowEmailInput(value === "Yes"); 
  };

  // Handles login validation
  const handleLogin = () => {
    if (email === dummyUser.email ) {
      // alert("Login successful! Redirecting...");
      navigate("/signUpYesForm"); 
    } else {
      alert("Invalid email or password! Please try again.");
    }
  };

 
  const handleClick = () => {
    navigate("/signupno");
  };

  
  const handleContinue = () => {
    if (selectedOption === "Yes") {
      handleLogin(); 
    } else {
      handleClick();     }
  };

  return (
    <>
      <main id="wrapper">
        <section className="flex-container pl-300">
          <section className="left-section width-300">
            <div className="mb-60 mt-40 ml-50">
              <a href="/" className="color-grey">
                <img src="images/ic-back.png" width="40px" alt="Back" />
              </a>
            </div>
            <div className="" style={{ textAlign: "center", marginTop: "10rem" }}>
              <h3 className="color-black">Sign Up</h3>
            </div>
          </section>
          <section className="width-full bg-white minH-100vh">
            <div className="mt-80 pt-60 pl-100 pr-100">
              <div className="mb-50 col-sm-5">
                <div className="pr-0 form-group mt-40">
                  <label className="field-title mb-5">
                    Do You Know Your Buyer's Email
                  </label>
                  <div className="select">
                    <select required onChange={handleSelectChange} value={selectedOption}>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                {/* Conditionally Render Email Input */}
                {showEmailInput && (
                  <div className="pl-0 mt-40 form-group">
                    <label className="field-title mb-5">BUYER EMAIL ID</label>
                    <input
                      type="text"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <label className="field-title mt-40">PASSWORD</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    /> */}
                    {/* <div className="form-group col-sm-12 pl-0 mt-40">
                      <div className="terms-condition-sec">
                        <h6>Terms &amp; Conditions</h6>
                      </div>
                      <div className="mt-20 mb-10" style={{ display: "flex", alignItems: "center" }}>
                        <div className="checkboxes">
                          <label>
                            <input type="checkbox" name="type" />
                            <span className="checkbox mr-10" />
                          </label>
                        </div>
                        <div>Terms &amp; Conditions</div>
                      </div>
                    </div> */}
                  </div>
                )}

                <div className="clear" />
              </div>

              <div className="vendor-requests">
                <div className="clear" />
                <div className="text-right mb-40" style={{ marginTop: "20rem" }}>
                  <button
                    className="btn btn-lg btn-red-thin-stroked color-red fs-16"
                    onClick={handleContinue} // Call appropriate function based on selection
                  >
                    CONTINUE
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Signup;
