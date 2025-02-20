import React from 'react'

import { Navigate, useNavigate } from 'react-router'

function SupplierDetails() {
const navigate = useNavigate()
const handleClick = () =>{
navigate("/thankyou")

}
  return (
  <>
  
  <main id="wrapper">
  {/*Content*/}
  <section className="flex-container pl-400">
    <section className="pl-50 pr-50 left-section width-400">
      <div className="mb-50 mt-40">
        <a href="#">
          <img src="images/escortskubota.png" width={156} alt="" />
        </a>
      </div>
      <div className="stepper mt-100">
        <p
          className="fs-20 color-black mt-50 mb-20"
          style={{ fontWeight: 600 }}
        >
          Buyer to Enter Supplier Details for Onboarding Process
        </p>
      </div>
    </section>
   
    <section className="width-full bg-white minH-100vh">
    
      {/*Header*/}
      <div className="user-header bg-white"/>
      {/*Header*/}
      {/*Content*/}
   
   
      <div className=" pt-60 pl-70 pr-70" style={{marginTop:"430px"}}>
        <div className="mb-100">
          <h4 className="fs-30 pull-left width-60 mb-100">
            Supplier Details
            <p className="color-grey fs-16 mt-10 line-height-20">
              Please fill in your supplier details{" "}
            </p>
          </h4>
        </div>
        {/*Form*/}
        <div className="form-group col-sm-6 pl-0 mt-0">
          <label className="field-title mb-5">COMPANY NAME</label>
          <input type="text" placeholder="Green Part" />
        </div>
        <div className="col-sm-6 pr-0 form-group">
          <label className="field-title mb-5">SUPPLIER EMAIL ID</label>
          <input type="text" placeholder="greenpart@gmail.com" />
        </div>
        <div className="col-sm-6 pl-0 mt-40 form-group">
          <label className="field-title mb-5">BUYER EMAIL ID</label>
          <div className="select">
            <select required="">
              <option value="" hidden="">
                Select
              </option>
              <option>anb@gmail.com</option>
              <option>xyz@gmail.com</option>
              <option>anb@gmail.com</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">Operating Unit</label>
          <div className="select">
            <select required="">
              <option value="" hidden="">
                Select
              </option>
              <option>Unit 1</option>
              <option>Unit 2</option>
            </select>
          </div>
        </div>
        <div className="form-group col-sm-6 pl-0 mt-40">
          <label className="field-title mb-5">
            Direct / In-direct Associaton
          </label>
          <div className="select">
            <select required="">
              <option value="" hidden="">
                Select
              </option>
              <option>Direct</option>
              <option>In-Direct</option>
            </select>
          </div>
        </div>
        {/*Upload Document*/}
        <div className="clear" />
        <div className="mt-120 text-right">
          {/* <a href="#" class="mr-80">SAVE</a> */}
          <button
            className="btn btn-lg"
            onClick={handleClick}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="clear" />
      {/*Content*/}
      {/*Footer*/}
      <footer className="mt-50">
        <div className="container-fluid">
          <div className="pull-left">
            <a href="#" className="fs-14 color-black">
              HELP CENTER
            </a>
            <a href="#" className="fs-14 color-black pl-50">
              VISIT ESCORTSKUBOTA.COM
            </a>
          </div>
          <p className="pull-right fs-12 color-black">
            Escorts Kubota Limited 2024 - All Rights Reserved.
          </p>
        </div>
      </footer>
      {/*Footer*/}
    </section>
  </section>
  {/*Content*/}
</main>

  
  </>
  )
}

export default SupplierDetails