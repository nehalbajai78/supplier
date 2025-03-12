import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { doValidateOtp } from "./authSlice";
import { useEffect, useState } from "react";
import { CONSTANTS } from "../../util/constants";
import {
  encrypt,
  generateRandomIv,
  generateRandomSalt,
} from "../../util/aesUtil";

const ValidateOtp = () => {
  console.log("Rendering Validate OTP Component");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, status, otpError, channel } = useSelector(
    (state) => state.auth
  );

  const [otp, setOtp] = useState("");
  const [otpErrMsg, setOtpErrMsg] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // useEffect(function () {
  //   if (username === "") navigate("/", { replace: true });
  // }, []);

  useEffect(() => {
    setOtpErrMsg("");
  }, [otp]);

  useEffect(() => {
    console.log(otpError);
    setOtpErrMsg(otpError.otpErrMsg);
  }, [otpError.otpErrMsg]);

  useEffect(() => {
    if (status === "authenticated") {
      //navigate to home
      // navigate("/home");
      //navigate("/ehs");

    //  window.location.replace(
    //    CONSTANTS.ADF_PARTNER_PORTAL_ENDPOINT + CONSTANTS.ADF_HOMEPAGE_ENDPOINT
    //  );
    navigate("/home");
    }
  }, [status]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (status !== "locked") {
      if (otp === "") {
        setOtpErrMsg("Invalid OTP");
        return;
      }
      // encrypt
      const iv = generateRandomIv();
      const salt = generateRandomSalt();
      const cipherText = encrypt(otp, iv, salt);
      const aesOtp = iv + "::" + salt + "::" + cipherText;
      console.log("Aes OTP String :" + aesOtp);
      // call api for login here
      dispatch(doValidateOtp({ username, otp: aesOtp, journey: "L" }));
      // setUsername("");
      //setOtp("");
    }
  };
  const handleOTPChange = (e) => {
    setOtp(e.target.value);
    if (e.target.value.length === 5) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  };

  return (
    <main id="wrapper">
      <section className="flex-container">
        <section className="width-35 pl-50 pr-30 minH-100vh">
          <h3 className="fs-48 mt-200">
            <span className="color-black">Login</span>
            <br />
            <span className="color-red line-height-60">OTP</span>
          </h3>
          <p className="mt-30 fs-16 color-grey">
            Please check your 
            <br />
            <div className="color-grey">
              We’ve sent a code to your registered 
            </div>
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
                  name="otp"
                  autoComplete="off"
                  // required
                  value={otp}
                  onChange={(e) => handleOTPChange(e)}
                />
              </div>
              {/* {otpErrMsg !== "" && (
                <div className="color-red">
                  <span>{otpErrMsg}</span>
                </div>
              )} */}
            </div>

            <div className="mt-200 text-right">
              <Link to="/login" className="mr-80">
                CANCEL
              </Link>
              <button
                className="btn btn-lg"
                // disabled={status === "submitting" || isBtnDisabled}
              >
            
                {status === "submitting" ? "SUBMIT..." : "SUBMIT"}
              </button>
              <br />

              {/* <Link to="/ehs" className="mr-80 mt-30">
                EHS
              </Link> */}
              {/*<Link to="/profile" className="mr-80 mt-30">
                PROFILE
              </Link> */}
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

// export async function action({ request }) {
//   const formData = await request.formData();
//   console.log(formData);
//   const data = Object.fromEntries(formData);
//   console.log(data);
//   return null;
// }

export default ValidateOtp;
