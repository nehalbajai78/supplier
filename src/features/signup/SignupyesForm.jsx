import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SignupyesForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initially disabled checkbox & button
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsCheckboxChecked(false);
    setIsButtonDisabled(true);

    const termsAccepted =
      (location.state && location.state.fromSignup === true) ||
      localStorage.getItem("termsAccepted") === "true";

    if (termsAccepted) {
      setIsCheckboxChecked(true);
      setIsButtonDisabled(false);
    }
  }, [location.state]);

  // State to store form fields and errors
  const [formData, setFormData] = useState({
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  
  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.contact) newErrors.contact = "Contact details are required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && isCheckboxChecked) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
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

            <div className="" style={{ textAlign: "center", marginTop: "10rem" }}>
              <h3 className="color-black">Sign Up</h3>
            </div>
          </section>

          <section className="width-full bg-white minH-100vh">
            <div className="mt-80 pt-60 pl-100 pr-100">
              <div className="mb-50 col-sm-6">
                {/* Email Input */}
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">YOUR EMAIL</label>
                  <input type="text" name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} />
                  {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                {/* Contact Input */}
                <div className="pl-0 mt-40 form-group">
                  <label className="field-title mb-5">CONTACT DETAILS</label>
                  <input type="text" name="contact" placeholder="Enter Contact Details" value={formData.contact} onChange={handleChange} />
                  {errors.contact && <p style={{ color: "red" }}>{errors.contact}</p>}
                </div>

                {/* Password Input */}
                <div className="form-group mt-40">
                  <label className="field-title mb-5">PASSWORD</label>
                  <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                  {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                {/* Confirm Password Input */}
                <div className="form-group mt-40">
                  <label className="field-title mb-5">RE-ENTER PASSWORD</label>
                  <input type="password" name="confirmPassword" placeholder="Re-enter Password" value={formData.confirmPassword} onChange={handleChange} />
                  {/* {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>} */}
                </div>
                <div className="clear" />
                <div className="form-group col-sm-12 pl-0 mt-40">
                  <div className="mt-20 mb-10" style={{ display: "flex", alignItems: "center" }}>
                    <div className="checkboxes">
                      <label>
                        <input type="checkbox" name="type" checked={isCheckboxChecked} disabled />
                        <span className="checkbox mr-10" />
                      </label>
                    </div>
                    <div>
                      By clicking submit you agree to our{" "}
                      <Link to="/termsAndCondition" state={{ fromSignup: true }}>
                        Terms &amp; Conditions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="vendor-requests">
                <div className="clear" />
                <div className="text-right mb-40" style={{ marginTop: "20rem" }}>
                  <button className="btn btn-lg btn-red-thin-stroked color-red fs-16" onClick={handleSubmit} disabled={isButtonDisabled}>
                    {isSubmitting ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
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

export default SignupyesForm;
