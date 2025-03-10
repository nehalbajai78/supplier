import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from './forgotSlice'
import { encrypt,generateRandomIv ,generateRandomSalt } from '../../util/aesUtil'


function ResetOtp() {
  console.log("Rendering resetotp Component");
  const { username, partnerUserId, forgotPwdToken, fpStatus, rpErrMsg } =
    useSelector((state) => state.forgot);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErrMsg, setConfirmPasswordErrMsg] = useState("");

  useEffect(() => {
    setPasswordErrMsg("");
    setConfirmPasswordErrMsg("");
  }, [password, confirmPassword]);

  useEffect(() => {
    console.log(fpStatus);
    if (fpStatus === "rpFailed") {
      setPasswordErrMsg(rpErrMsg);
    }
    if (fpStatus === "rpSuccess") navigate("/");
  }, [fpStatus]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setConfirmPasswordErrMsg("Password and Confirm password do not match");
    } else {
      setConfirmPasswordErrMsg("");
      // encrypt
      const iv = generateRandomIv();
      const salt = generateRandomSalt();
      const cipherText = encrypt(password, iv, salt);
      const aesPassword = iv + "::" + salt + "::" + cipherText;
      console.log("Aes Password String :" + aesPassword);
      dispatch(
        resetPassword({ partnerUserId, password: aesPassword, forgotPwdToken })
      );
    }

    console.log(partnerUserId, password, forgotPwdToken);
  };






  return (
  <>
   {/* <main id="wrapper">
  
    <section className="flex-container pl-300">
      
      <section className="left-section width-300">
      <div className="" style={{ textAlign: "center", marginTop: "20rem" }}>
  <h3 className="">
    Forgot <br />
    <span style={{ color: "#0fb1b4" }}>Password</span>
  </h3>
</div>
      </section>
      <section className="width-full bg-white minH-100vh">
       
       
        <div className="mt-80 pt-60 pl-100 pr-100">
          <div className="mb-50  col-sm-5">
        <div className=" pl-0 mt-40 form-group">
          <label className="field-title mb-5">Enter Otp</label>
          <input type="text" placeholder="Enter Otp" />
        </div>
            <div className="clear" />
          </div>
          <div className="vendor-requests" >
                <div className="clear" />
              
               <div  className=" text-right mb-40" style={{marginTop:"20rem"}}>
               
                    
                  <button
                    className="btn btn-lg btn-red-thin-stroked color-red fs-16"
                    
                  >
               Submit
                  </button>
                </div>
          </div>
        </div>
      
      </section>
    </section>
  
  </main> */}
  <main id="wrapper">
        {/*Content*/}
        <section className="flex-container">
          <section className="width-35 pl-80 pr-100 minH-100vh">
            <h3 className="fs-48 color-black mt-200">
              Forgot <span className="color-red">Password</span>
            </h3>
            <p className="mt-30 fs-16 color-grey">
              Please check your email. We’ve sent a code to{" "}
              <span className="color-black">{username ?? "null"}</span>
            </p>
          </section>
          <section className="width-65 pl-150 pr-100 bg-white pb-50">
            <form onSubmit={handleFormSubmit}>
              <div className="pr-250 pt-200">
                <div className="form-group  ">
                  <label className="field-title mb-5">NEW PASSWORD</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordErrMsg !== "" && (
                    <div>
                      <span className="color-red fs-14 error-lS">
                        {passwordErrMsg}
                      </span>
                    </div>
                  )}
                  <p className="fs-12 color-grey mt-10">
                    Password has to be minimum 8 character long
                  </p>
                </div>
                <div className="form-group mt-40">
                  <label className="field-title mb-5">CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    placeholder="Enter confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {confirmPasswordErrMsg !== "" && (
                    <div>
                      <span className="color-red fs-14 error-lS">
                        {confirmPasswordErrMsg}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-290 text-right">
                <Link to="/" className="mr-80">
                  CANCEL
                </Link>
                <button
                  className="btn btn-lg"
                  // disabled={fpStatus === "submitting"}
                >
                  {fpStatus === "submitting"
                    ? "SET PASSWORD..."
                    : "SET PASSWORD"}
                </button>
              </div>
            </form>
          </section>
        </section>
        {/*Content*/}
      </main>
  </>
  )
}

export default ResetOtp