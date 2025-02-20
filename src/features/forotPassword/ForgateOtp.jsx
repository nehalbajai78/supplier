import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ForgateOtp() {
  const navigate = useNavigate()
  const [otp,setOtp] = useState("")


  const myotp = "12345"
  
const handleverifyOTP =() =>{
  if (otp === myotp) {
    navigate('/thankyou')
  }
  else{
    alert('Invalid OTP ! Try Again')
  }
}

  
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
        {/*Header*/}
      
        {/*Header*/}
        {/*Content*/}
        <div className="mt-80 pt-60 pl-100 pr-100">
          <div className="mb-50  col-sm-5">
        <div className=" pl-0 mt-40 form-group">
          <label className="field-title mb-5">Enter Otp</label>
          <input type="text" placeholder="Enter Otp" value={otp} onChange={(e) =>setOtp(e.target.value)} />
        </div>
            <div className="clear" />
          </div>
          <div className="vendor-requests" >
                <div className="clear" />
              
               <div  className=" text-right mb-40" style={{marginTop:"20rem"}}>
               
                    {/* <a className=' mr-40' href="/">CANCEL</a> */}
                  <button
                    className="btn btn-lg btn-red-thin-stroked color-red fs-16"
                    onClick={handleverifyOTP}
                  >
               Submit
                  </button>
                </div>
          </div>
        </div>
        {/*Content*/}
      </section>
    </section>
    {/*Content*/}
  </main>
  
  </>
  )
}

export default ForgateOtp