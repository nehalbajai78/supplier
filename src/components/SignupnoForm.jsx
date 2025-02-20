import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function SignupnoForm() {
  const navigate = useNavigate();

  
  const [fields, setFields] = useState({
    name: "",
    email: "",
    url: "",
  });

  const [errors, setErrors] = useState({}); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value, 
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

 
  const handleSubmit = () => {
    let newErrors = {};

   
    Object.keys(fields).forEach((key) => {
      if (!fields[key]) {
        newErrors[key] = `This field is required`;
      }
    });

    setErrors(newErrors);

  
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      navigate("/thankyousu"); 
    }
  };

  return (
    <>
      <main id="wrapper">
        {/* Content */}
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
              <div className="mb-50 col-sm-6">
              
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">Company Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Company Name"
                    value={fields.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error-text" style={{ color: "red" }}>{errors.name}</p>}
                </div>

               
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">BUYER EMAIL ID</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email Address"
                    value={fields.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error-text" style={{ color: "red" }}>{errors.email}</p>}
                </div>

                
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">Company URL</label>
                  <input
                    type="text"
                    name="url"
                    placeholder="Enter Company URL"
                    value={fields.url}
                    onChange={handleChange}
                  />
                  {errors.url && <p className="error-text" style={{ color: "red" }}>{errors.url}</p>}
                </div>

                {/* Product & Services Category */}
                <div className="pr-0 form-group mt-40">
                  <label className="field-title mb-5">Product & Services Category</label>
                  <div className="select">
                    <select required  >
                    <option >Select Category</option>
                      <option >
                       B2B
                      </option>
                      <option>DTH</option>
                      <option >IT</option>
                     
                    </select>
                  </div>
                </div>

                <div className="clear" />
              </div>

              {/* Submit Button */}
              <div className="vendor-requests">
                <div className="clear" />
                <div className="text-right mb-40" style={{ marginTop: "20rem" }}>
                  <button className="btn btn-lg btn-red-thin-stroked color-red fs-16" onClick={handleSubmit}>
                    SUBMIT
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

export default SignupnoForm;
