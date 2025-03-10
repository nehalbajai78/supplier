import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useDispatch,useSelector } from "react-redux";
import { buyerUnknown } from "./signUpSlice";
function SignupnoForm() {
  const navigate = useNavigate();
  const dispatch= useDispatch();
    const { pcData,signUpStatus, EmailErrMsg,UrlErrMsg} = useSelector((state) => state.signUp);
    const [partnerEmail, setPartnerEmail] = useState("");
    const [companyname, setCompanyname] = useState("");
    const[companynameErrMsg,setCompanynameErrMsg] =useState("")
    const [partneremailErrrMsg, setPartneremailErrrMsg] = useState("");
    const [companyUrl, setCompanyUrl] = useState("");
    const [companyUrlErrMsg, setCompanyUrlErrMsg] = useState("");
    const [productAndServiceCategory, setProductAndServiceCategory] =
      useState("");
      const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  
    console.log("pcData", pcData);
  
    // useEffect
    // (() => {
    //   dispatch(productCategory({}));
    // }, []);
  
    useEffect(() => {
      setPartneremailErrrMsg(EmailErrMsg);
      setCompanyUrlErrMsg(UrlErrMsg);
      // setCompanynameErrMsg
    }, [signUpStatus]);
  
    useEffect(() => {
      setPartneremailErrrMsg("");
      setCompanyUrlErrMsg("");
    }, [partnerEmail, companyUrl]);
  

    // useEffect(() => {
    //   setPartneremailErrrMsg("");
    //   setCompanyUrlErrMsg("");
    // }, [signUpStatus]);
  
    useEffect(() => {
      if (signUpStatus === "busuccess") navigate("/thankyou");
    }, [signUpStatus]);
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      setFormSubmitted(true); 
    
      dispatch(
        buyerUnknown({ partnerEmail, companyUrl, productAndServiceCategory })
        
      );
    };
  
  

  return (
    <>
      <main id="wrapper">
        {/* Content */}
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
              <form onSubmit={handleFormSubmit}>
              <div className="mb-50 col-sm-6">
              
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">Company Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Company Name"
                  
                   
                  />
                  
                </div>
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">BUYER EMAIL ID</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email Address"
                    value={partnerEmail}
                    onChange={(e)=>setPartnerEmail(e.target.value)}
                   
                  />
                  {
                   formSubmitted &&  partneremailErrrMsg !== "" &&(
                      <div>
                        <span className=" fs-14 error-lS" style={{color:"red"}}>{partneremailErrrMsg}</span>
                      </div>
                    )
                  }
                 
                </div>

                
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">Company URL</label>
                  <input
                    type="text"
                    name="url"
                    placeholder="Enter Company URL"
                    value={companyUrl}
                    onChange={(e)=>setCompanyUrl(e.target.value)}
                  />
                  {
                   formSubmitted &&  companyUrlErrMsg !== "" &&(
                      <div>
                        <span className=" fs-14 error-lS" style={{color:"red"}}>{companyUrlErrMsg}</span>
                      </div>
                    )
                  }
                 
                </div>

            
                <div className="pr-0 form-group mt-40">
                  <label className="field-title mb-5">Product & Services Category</label>
                
                  <div className="select">
                    <select value={productAndServiceCategory}  onChange={(e)=>setProductAndServiceCategory(e.target.value)}  >
                    <option >Select Category</option>
                    {
                      pcData &&
                       pcData.map((obj)=>{
                        return(
                          <option key={obj.key} value={obj.key}> {obj.name}</option>
                        )
                  
                      })
                    }
                      {/* <option>DTH</option>
                      <option >IT</option> */}
                     
                    </select>
                  
                 
                  </div>
                </div>

                <div className="clear" />
              </div>
                 {/* Submit Button */}
                 <div className="vendor-requests">
                <div className="clear" />
                <div className="text-right mb-40" style={{ marginTop: "20rem" }}>
                  <button className="btn btn-lg btn-red-thin-stroked color-red fs-16" >
                    SUBMIT
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

export default SignupnoForm;
