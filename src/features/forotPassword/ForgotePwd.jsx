import React ,{useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { forgotPassword  } from './forgotSlice';
import { useDispatch, useSelector } from "react-redux";

function ForgatePwd() {
  console.log("rendering ForgatePwd component ");
  
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const { fpStatus, forgotPwdErrMsg } = useSelector((state) => state.forgot);

 const [usernameErrMsg, setUsernameErrMsg] = useState("");
 const [username, setUsername] = useState("");



 console.log(fpStatus);
 
 useEffect(() => {
   setUsernameErrMsg("");
 }, [username]);

 useEffect(() => {
   console.log("Forgot Password Status--->" + fpStatus);
   if (fpStatus === "fpFailed") {
     setUsernameErrMsg(forgotPwdErrMsg);
    
   }
   if (fpStatus === "fpSuccess") navigate("/sendOtp");
 }, [fpStatus]);

 const handleFormSubmit = async (e) => {
   e.preventDefault();
   console.log(username);
   dispatch(forgotPassword({ username }));
 };





  return (
  <>
   <main id="wrapper">
    {/*Content*/}
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
      
        {/*Content*/}
        <form onSubmit={handleFormSubmit}>
        <div className="mt-80 pt-60 pl-100 pr-100">
          <div className="mb-50  col-sm-5">
        <div className=" pl-0 mt-40 form-group">
          <label className="field-title mb-5">Email Address</label>
          <input type="text" placeholder="Enter Email Address" autoComplete='off' value={username}  onChange={(e)=>setUsername(e.target.value)}/>
        </div>
            <div className="clear" />
          </div>
          {
            usernameErrMsg !== "" &&(
              <div> <span className=" fs-14 error-lS" style={{color:"red"}}>
                {usernameErrMsg}
              </span>
              
              </div>
            )
          }
          <div className="vendor-requests" >
                <div className="clear" />
              
               <div  className=" text-right mb-40" style={{marginTop:"20rem"}}>
               
                    <a className=' mr-40' href="/">CANCEL</a>
                  <button
                    className="btn btn-lg btn-red-thin-stroked color-red fs-16"
                    disabled={fpStatus ==="submitting"}
                  >
                 {fpStatus === "submitting" ? "SEND OTP...":"SEND OTP"}
               {/* SEND OTP */}
                  </button>
                </div>
          </div>
        </div>
        </form>
        {/*Content*/}
      </section>
    </section>
    {/*Content*/}
  </main>
  
  </>
  )
}

export default ForgatePwd