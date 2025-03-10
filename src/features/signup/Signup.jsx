import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateBuyer ,productCategory } from "./signUpSlice";

function Signup() {
  console.log("Rendering signup page");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signUpStatus, buyerError } = useSelector((state) => state.signUp);

  const [selectedOption, setSelectedOption] = useState("yes");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerErrEmail, setBuyerErrEmail] = useState("");

 
  const handleSelectChange = (event) => {
    const value = event.target.value // Convert to lowercase
    setSelectedOption(value);
    console.log("Selected option:", value);

    
  };


  // Update error message when signUpStatus changes
  useEffect(() => {
    setBuyerErrEmail(buyerError);
  }, [signUpStatus]);
  console.log("buyerEmailErrMsg",buyerErrEmail);
  

  // Clear error when buyerEmail changes
  useEffect(() => {
    setBuyerErrEmail("");
  }, [buyerEmail]);

  // Navigate when signUpStatus is "vbsuccess" and email is entered
  useEffect(() => {
    console.log("status",signUpStatus);
    
    if (signUpStatus === "vbsuccess" && buyerEmail !== "") {
      navigate("/signUpYesForm");
    }
  }, [signUpStatus]);

  const ClickContinue = () => {
    if (selectedOption === "yes") {
     
      dispatch(validateBuyer({ buyerEmail }));
    }
    else {
      dispatch(productCategory({}))
      navigate("/signUpNoForm"); 
    }
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
            <div style={{ textAlign: "center", marginTop: "10rem" }}>
              <h3 className="color-black">Sign Up</h3>
            </div>
          </section>

          <section className="width-full bg-white minH-100vh">
            <div className="mt-80 pt-60 pl-100 pr-100">
              <div className="mb-50 col-sm-5">
                <div className="pr-0 form-group mt-40">
                  <label className="field-title mb-5">
                    Do You Know Your Buyer's Email?
                  </label>
                  <div className="select">
                    <select value={selectedOption} onChange={handleSelectChange}>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                {/* Show Email Input Only If "Yes" is Selected */}
                {selectedOption === "yes" && (
                  <div>
                    <label className="field-title mb-5 mt-40">BUYER EMAIL ID</label>
                    <input
                      type="text"
                      placeholder="Enter Email Address"
                      value={buyerEmail}
                      onChange={(e) => setBuyerEmail(e.target.value)}
                    />
                   
                      <span className=" fs-14 error-lS" style={{color:"red"}}>
                        {buyerErrEmail}
                      </span>
                   
                  </div>
                )}
              </div>
             <div className="clear"/>
          <div className="vendor-requests">
                <div className="text-right mb-40"  >
                  <button
                    className="btn btn-lg btn-red-thin-stroked color-red fs-16"
                    onClick={ClickContinue}
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
