
import { useEffect, useState } from 'react'
import { sendOtp } from './forgotSlice'
import { useNavigate ,Link } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import { encrypt ,generateRandomIv,generateRandomSalt } from '../../util/aesUtil'
import { CONSTANTS } from '../../util/constants'
function SendOtp() {
  console.log("Rendering sendotp Component");
  const { username, fpStatus, otpError } = useSelector((state) => state.forgot);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState("");
  const [otpErrMsg, setOtpErrMsg] = useState("");

  useEffect(() => {
    setOtpErrMsg("");
  }, [otp]);

  useEffect(() => {
    console.log(fpStatus);
    if (fpStatus === "voFailed") {
      setOtpErrMsg(otpError);
    }
    if (fpStatus === "voSuccess") navigate("/resetotp");
  }, [fpStatus]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(username, otp);
    if (otp === "") {
      setOtp(CONSTANTS.FIELD_MANDATORY_MSG);
      return;
    } 
    // encrypt
    const iv = generateRandomIv();
    const salt = generateRandomSalt();
    const cipherText = encrypt(otp, iv, salt);
    const aesOtp = iv + "::" + salt + "::" + cipherText;
    console.log("Aes Password String :" + aesOtp);
    dispatch(sendOtp({ username, otp: aesOtp, journey: "FP" }));
  };

  return (
    <>
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
                <div className="form-group mt-40">
                  <label className="field-title mb-5">CODE</label>
                  <input
                    type="text"
                    placeholder="Enter code"
                    autoComplete="off"
                    // required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  {otpErrMsg !== "" && (
                    <div>
                      <span className="color-red fs-14 error-lS">
                        {otpErrMsg}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-290 text-right">
                <Link to="/" className="mr-80">
                  CANCEL
                </Link>
                {/* <button className="btn btn-lg" onClick={ClickButton}>
                SUBMIT
              </button> */}

                <button
                  className="btn btn-lg"
                  // disabled={fpStatus === "submitting"}
                >
                  {fpStatus === "submitting" ? "SUBMIT..." : "SUBMIT"}
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

export default SendOtp