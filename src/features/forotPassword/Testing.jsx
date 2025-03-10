import React, { useState } from "react";

function Testing() {
  console.log("Rendering signup page");

  const [buyerEmail, setBuyerEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  console.log();
  
  const handleApiCall = async () => {
    try {
      const response = await fetch(
        "/api/partner/api/v1/auth/validate-otp",
        // "/api/partner/api/v1/account/validate-buyer"
       //8080/partner/api/v1/auth/forgot
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-forwarded-host": "localhost:8080",
          },
          body: JSON.stringify({ buyerEmail  }),
        //   mode: "no-cors",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Buyer validated successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage(data.message || "Validation failed!");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Error occurred while validating buyer.");
      console.error("API error:", error);
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
                {/* <div className="pr-0 form-group mt-40">
                  <label className="field-title mb-5">
                    Do You Know Your Buyer's Email?
                  </label>
                  <div className="select">
                    <select>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div> */}

                <div>
                  <label className="field-title mb-5 mt-40">
                    BUYER EMAIL ID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                  />
                  {errorMessage && (
                    <span className="fs-14 error-lS" style={{ color: "red" }}>
                      {errorMessage}
                    </span>
                  )}
                  {/* {successMessage && (
                    <span className="fs-14" style={{ color: "green" }}>
                      {successMessage}
                    </span>
                  )} */}
                </div>
              </div>
              <div className="clear" />
              <div className="vendor-requests">
                <div className="text-right mb-40">
                  <button
                    className="btn btn-lg btn-red-thin-stroked color-red fs-16"
                    onClick={handleApiCall} // Call API on button click
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

export default Testing;
