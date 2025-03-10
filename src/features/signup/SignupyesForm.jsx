import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { buyerKnown } from "./signUpSlice";
function SignUpYesForm() {
  const navigate = useNavigate();
  const location = useLocation();
const dispatch =useDispatch()
   const { signUpStatus, buyerEmail,emailErr,mobileErr ,passwordErr } = useSelector((state) => state.signUp);
   const [email, setEmail] = useState("");
   const [emailErrMsg, setEmailErrMsg] = useState("");
   const [mobileNumber, setMobileNumber] = useState("");
   const [mobileNumberErrMsg, setMobileNumberErrMsg] = useState("");
   const [password, setPassword] = useState("");
   const [passwordErrMsg, setPasswordErrMsg] = useState("");
   const [reEnterPassword, setReEnterPassword] = useState("");
   const [reEnterPasswordErr, setReEnterPasswordErr] = useState("");
 
   // code to handle persist form, used session storage
 
   useEffect(() => {
     const storedEmail = sessionStorage.getItem("emailValue");
     if (storedEmail) {
       setEmail(storedEmail);
     }
   }, []);
 
   const handleChangeEmail = (e) => {
     const newValue = e.target.value;
     setEmail(newValue);
     sessionStorage.setItem("emailValue", newValue); // Store in sessionStorage
   };
 
   useEffect(() => {
     const storedMobile = sessionStorage.getItem("mobileValue");
     if (storedMobile) {
       setMobileNumber(storedMobile);
     }
   }, []);
 
   const handleChangeMobile = (e) => {
     const newValue = e.target.value;
     setMobileNumber(newValue);
     sessionStorage.setItem("mobileValue", newValue); // Store in sessionStorage
   };
 
   useEffect(() => {
     const storedPassword = sessionStorage.getItem("passwordValue");
     if (storedPassword) {
       setPassword(storedPassword);
     }
   }, []);
 
   const handleChangePassword = (e) => {
     const newValue = e.target.value;
     setPassword(newValue);
     sessionStorage.setItem("passwordValue", newValue); // Store in sessionStorage
   };
 
   useEffect(() => {
     const storedReEnterPassword = sessionStorage.getItem(
       "reEnterPasswordValue"
     );
     if (storedReEnterPassword) {
       setReEnterPassword(storedReEnterPassword);
     }
   }, []);
 
   const handleChangeReEnterPassword = (e) => {
     const newValue = e.target.value;
     setReEnterPassword(newValue);
     sessionStorage.setItem("reEnterPasswordValue", newValue); // Store in sessionStorage
   };
 
   // form end here
 
   useEffect(() => {
     setEmailErrMsg(emailErr);
     setMobileNumberErrMsg(mobileErr);
     setPasswordErrMsg(passwordErr);
   }, [signUpStatus]);
 
   useEffect(() => {
     setEmailErrMsg("");
     setMobileNumberErrMsg("");
     setPasswordErrMsg("");
     setReEnterPasswordErr("");
   }, [email, mobileNumber, password, reEnterPassword]);
 
   useEffect(() => {
     console.log(signUpStatus);
     if (signUpStatus === "bksuccess") {
       navigate("/tyWithResendLink");
     }
   }, [signUpStatus]);
 
   const handleFormSubmit = async (e) => {
     e.preventDefault();
     sessionStorage.removeItem("emailValue");
     sessionStorage.removeItem("mobileValue");
     sessionStorage.removeItem("passwordValue");
     sessionStorage.removeItem("reEnterPasswordValue");
 
     if (password !== reEnterPassword) {
       setReEnterPasswordErr("Password and Confirm password do not match");
     } else {
       setReEnterPasswordErr("");
 
       dispatch(buyerKnown({ buyerEmail, email, mobileNumber, password }));
     }
     console.log(buyerEmail, email, mobileNumber, password);
   };
 
  return (
    <>
      <main id="wrapper">
        <section className="flex-container pl-300">
          <section className="left-section width-300">
            <div className="mb-60 mt-40 ml-50">
              <a href="/signup" className="color-grey">
                <img src="images/ic-back.png" width="40px" alt="Back" />
              </a>
            </div>

            <div className="" style={{ textAlign: "center", marginTop: "10rem" }}>
              <h3 className="color-black">Sign Up</h3>
            </div>
          </section>

          <section className="width-full bg-white minH-100vh">
          
            <div className="mt-80 pt-60 pl-100 pr-100">
              <form onSubmit={handleFormSubmit} >
              <div className="mb-50 col-sm-6">
                {/* Email Input */}
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">YOUR EMAIL</label>
                  <input type="text" name="email" placeholder="Enter Email Address" value={email} onChange={handleChangeEmail} />
                 {
                  emailErrMsg !== "" &&(
                    <div>
                      <span className=" fs-14 error-lS" style={{color:"red"}}>{emailErrMsg}</span>
                    </div>
                  )
                 }
                </div>

                {/* Contact Input */}
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">CONTACT DETAILS</label>
                  <input type="text"  placeholder="Enter Contact Details" value={mobileNumber} onChange={handleChangeMobile}  />
                  {
                  mobileNumberErrMsg !== "" &&(
                    <div>
                      <span className=" fs-14 error-lS" style={{color:"red"}}>{mobileNumberErrMsg}</span>
                    </div>
                  )
                 }
                </div>

                {/* Password Input */}
                <div className="form-group mt-40">
                  <label className="field-title mb-5">PASSWORD</label>
                  <input type="password"  placeholder="Enter Password" value={password} onChange={handleChangePassword}  />
                  {
                  passwordErrMsg !== "" &&(
                    <div>
                      <span className=" fs-14 error-lS" style={{color:"red"}}>{passwordErrMsg}</span>
                    </div>
                  )
                 }
                </div>

                {/* Confirm Password Input */}
                <div className="form-group mt-40">
                  <label className="field-title mb-5">RE-ENTER PASSWORD</label>
                  <input type="password"  placeholder="Re-enter Password" value={reEnterPassword} onChange={handleChangeReEnterPassword} />
                  {
                  reEnterPasswordErr !== "" &&(
                    <div>
                      <span className=" fs-14 error-lS" style={{color:"red"}}>{reEnterPasswordErr}</span>
                    </div>
                  )
                 }
                </div>
                <div className="clear" />
                <div className="form-group col-sm-12 pl-0 mt-40">
                  <div className="mt-20 mb-10" style={{ display: "flex", alignItems: "center" }}>
                    <div className="checkboxes">
                      <label>
                        <input type="checkbox" name="type" checked={location && location.state && location.state.checked} disabled={true} />
                        <span className="checkbox mr-10" />
                        <em className="fs-16 font-normal color-666">
                        By clicking submit you agree to our{" "}
                        <Link className="fs-11  " style={{marginLeft:"22rem"}}  to="/termsAndCondition" state={{ fromSignup: true }}>
                        Terms &amp; Conditions
                      </Link>
                        </em>
                      </label>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="vendor-requests">
                <div className="clear" />
                <div className="text-right mb-40" style={{ marginTop: "20rem" }}>
                  <button className="btn btn-lg btn-red-thin-stroked color-red fs-16" disabled={!(location && location.state && location.state.checked)} >
                 {
                  signUpStatus === "submitting"? "CREATE ACCOUNT..." :"CREATE ACCOUNT"
                 }
                  </button>
                </div>
              </div>
              </form>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default SignUpYesForm;
