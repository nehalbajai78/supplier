import React from 'react'
import { useNavigate } from 'react-router-dom'
function AccountCreationOne() {

  const navigate = useNavigate()

  const handleClick =()=>{
    navigate("/accountcretiontwo")
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
          Account Creation
        </p>
      </div>
    </section>
    <section className="width-full bg-white minH-100vh">
      {/*Header*/}
      <div className="user-header bg-white"></div>
      {/*Header*/}
      {/*Content*/}
      <div className="mt-110 pt-60 pl-70 pr-70">
        <div className="clear" />
        <h4 className="fs-30 pull-left width-60">
          Organisation Details
          <p className="color-grey fs-16 mt-10 line-height-20">
            View documents provided by vendor with validations like mandatory to
            view attachments
          </p>
        </h4>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">Organisation Name</label>
          <input type="text" placeholder="Green Part" />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">PAN No.</label>
          <input type="text" placeholder="Enter organization Name" />
        </div>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">Name on card</label>
          <input type="text" placeholder="Enter organization Name" />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">
            Date of incorporation/date of birth
          </label>
          <input type="date" placeholder="DD/MM/YY" />
        </div>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">LEGAL ENTITY</label>
          <input type="text" placeholder="Enter Legal Entity" />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">Corporate Address</label>
          <input type="date" placeholder="DD/MM/YY" />
        </div>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">Billing Address</label>
          <input type="text" placeholder="Enter Billing Address" />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">cin</label>
          <input type="text" placeholder="Enter CIN" />
        </div>
        <div className="clear" />
        <h4 className="fs-30 mt-100">MSME Details</h4>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">MSME Status</label>
          <div className="select">
            <select required="">
              <option value="">Select</option>
              <option value="" hidden="">
                Direct
              </option>
              <option>In-Direct</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">URN</label>
          <input type="text" placeholder="Enter URN" />
        </div>
        <div className="clear" />
        <h4 className="fs-30 mt-100">Tax Details</h4>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">Service name </label>
          <div className="select">
            <select required="">
              <option value="">Select</option>
              <option value="" hidden="">
                A
              </option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">TDS APPLICABLE (%) </label>
          <div className="select">
            <select required="">
              <option value="">Select</option>
              <option value="" hidden="">
                1
              </option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">LDC</label>
          <input type="text" placeholder="Enter LDC" />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">VALID TILL</label>
          <input type="date" placeholder="DD/MM/YY" />
        </div>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">HSN</label>
          <input type="text" placeholder="Enter HSN" />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">SAC</label>
          <input type="text" placeholder="Enter SAC" />
        </div>
        <div className="clear" />
        <h4 className="fs-30 mt-100">GSTIN Details</h4>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">ENTER GST No</label>
          <input type="text" placeholder="Enter GST" />
        </div>
        <div className="clear" />
        <h4 className="fs-30 mt-100">Bank Details</h4>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">IFSC CODE </label>
          <input type="text" placeholder="Enter IFSC Code" />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">BANK NAME </label>
          <input type="text" placeholder="Enter Bank Name" />
        </div>
        <div className="col-sm-6 pl-0 form-group mt-40">
          <label className="field-title mb-5">ACCOUNT NO</label>
          <input type="text" placeholder="Enter Account No" />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">BRANCH NAME</label>
          <input type="text" placeholder="Enter Branch Name" />
        </div>
        {/*Upload Document*/}
        <div className="clear" />
        <div className="mt-120 text-right">
          {/* <a href="#" class="mr-80">SAVE</a> */}
          <button
            className="btn btn-lg"
           onClick={handleClick}
          >
            NEXT
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

export default AccountCreationOne