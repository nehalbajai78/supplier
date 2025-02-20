import React from 'react'
import { useNavigate } from 'react-router-dom'




function AccountCreationTwo() {
  const navigate = useNavigate()
  const handleClick =() =>{
navigate("/thankyouone")
  }
  return (
    <>
    <main id="wrapper">
  {/*Content*/}
  <section className="flex-container pl-400">
    <section className="pl-50 pr-50 left-section width-400">
      <div className="mb-50 mt-40">
        <a href="">
          <img src="images/escortskubota.png" width={156} alt="" />
        </a>
      </div>
      <div className="stepper mt-100">
        <p
          className="fs-20 color-black mt-50 mb-20"
          style={{ fontWeight: 600 }}
        >
          Account Creation (Cons)
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
        <h4 className="fs-30 pull-left width-60">Additional Details</h4>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">Service Category </label>
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
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">Revenue of previous fy </label>
          <input type="text" placeholder="Enter Revenue details..." />
        </div>
        <div className="col-sm-6 pr-0 form-group mt-40">
          <label className="field-title mb-5">relevant Work experience </label>
          <input type="text" placeholder="Enter Work Experience " />
        </div>
        <div className="clear"> </div>
        <div className="col-sm-12 pr-0 form-group mt-10">
          <div
            className="mt-10 mb-10"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="checkboxes">
              <label>
                <input type="checkbox" name="type" />
                <span className="checkbox mr-10" />
              </label>
            </div>
            <div>I have Ex-Escort Kubota employees in my Organization.</div>
          </div>
          <div
            className="mt-10 mb-10"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="checkboxes">
              <label>
                <input type="checkbox" name="type" />
                <span className="checkbox mr-10" />
              </label>
            </div>
            <div>
              I belong to Vulnerable/Marginalized category (Refer to SEBI ESG
              guidelines).
            </div>
          </div>
        </div>
        <div className="clear"> </div>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h4 className="fs-30 mt-100">Director Information</h4>
          <h6 className="mt-100">
            <img src="images/ic-add.png" height="24px" />
            &nbsp; Add Director
          </h6>
        </div>
        <div className="dataTables_wrapper mt-50">
          <table id="example" className="display nowrap">
            <thead>
              <tr>
                <th>
                  Director Name*&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                </th>
                <th>PAN number**</th>
                <th>
                  Mobile Number*&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp;
                </th>
                <th>Email ID* &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</th>
                <th>
                  Designation* &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp;
                </th>
                <th>Address* &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> ABC</td>
                <td>GJS72K765GH </td>
                <td>7788556574</td>
                <td>abc@gmail.com</td>
                <td>CEO</td>
                <td>C-2, A Block</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="clear"> </div>
        {/* <h4 class="fs-30 mt-100">Sub Contractors</h4> */}
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h4 className="fs-30 mt-100">Sub Contractors</h4>
          <h6 className="mt-100">
            <img src="images/ic-add.png" height="24px" />
            &nbsp; Add Sub Contractor
          </h6>
        </div>
        <div className="dataTables_wrapper mt-50">
          <table id="example" className="display nowrap">
            <thead>
              <tr>
                <th>
                  Sub-Contractor Name*&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;
                </th>
                <th>PAN Number**</th>
                <th>
                  Contact Details*&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                </th>
                <th>
                  IS Sub-Contractor Registered with us &nbsp; &nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp;
                </th>
                <th>
                  Supplier Code** &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> ABC </td>
                <td>GJS72K765GH</td>
                <td>9988774455</td>
                <td>Yes</td>
                <td>123</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="clear"> </div>
        <div className="panel mt-30" style={{ display: "block" }}>
          <p>
            Please select YES if you will be processing any cutomer/ employee
            PII such as First Name,Last Name, Contact No., Email ID, Address,
            Salary structure, payroll details, Call details, CDR, etc. and will
            not storing that data on their laptops/assets.
          </p>
          <div className="mt-10" style={{ display: "flex" }}>
            <div className="">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio1"
                name="example1"
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                Yes
              </label>
            </div>
            <div className=" ml-50">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio1"
                name="example2"
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                No
              </label>
            </div>
          </div>
          <hr />
          <p>
            Please select YES if you will be STORING any customer/ employee PII
            data that might include Name, Contact No, Email ID, Address, Salary
            structure, payroll details, Call details, CDR, etc. on your on
            laptops/assets.
          </p>
          <div className="mt-10" style={{ display: "flex" }}>
            <div className="">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio2"
                name="example1"
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                Yes
              </label>
            </div>
            <div className=" ml-50">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio2"
                name="example2"
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                No
              </label>
            </div>
          </div>
          <hr />
          <p>
            Please Select YES if you will be working from your own/any location
            that is not Escorts Kubota premises and is providing services to
            Escorts Kubota.
          </p>
          <div className="mt-10" style={{ display: "flex" }}>
            <div className="">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio3"
                name="example1"
              />
              <label className="custom-control-label" htmlFor="customRadio3">
                Yes
              </label>
            </div>
            <div className=" ml-50">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio3"
                name="example2"
              />
              <label className="custom-control-label" htmlFor="customRadio3">
                No
              </label>
            </div>
          </div>
          <hr />
          <p>
            Please Select YES if you will be using your own assets such as
            laptops, hand held devices, etc. for providing services to Escorts
            Kubota.
          </p>
          <div className="mt-10" style={{ display: "flex" }}>
            <div className="">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio7"
                name="example1"
              />
              <label className="custom-control-label" htmlFor="customRadio7">
                Yes
              </label>
            </div>
            <div className=" ml-50">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio4"
                name="example2"
              />
              <label className="custom-control-label" htmlFor="customRadio4">
                No
              </label>
            </div>
          </div>
          <hr />
          <p>
            Please select YES if you will be providing any servers, data center,
            cloud, or equipments to Escorts Kubota.
          </p>
          <div className="mt-10" style={{ display: "flex" }}>
            <div className="">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio1"
                name="example1"
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                Yes
              </label>
            </div>
            <div className=" ml-50">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio6"
                name="example2"
              />
              <label className="custom-control-label" htmlFor="customRadio6">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="clear" />
        {/*Uploaded Document*/}
        <div
          className="upload-document mt-50 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div className="pull-left file-name">
            <p className="fs-16 color-black">
              COMPANY REGISTRATION CERTIFICATE
            </p>
            <p className="fs-12 color-grey mt-5">
              PDF, PNG, JPG files only with max. file size 6mb
            </p>
          </div>
          <div className="pull-right mt-10">
            <a href="#" className="fs-14">
              BROWSE
            </a>
          </div>
        </div>
        <div
          className="upload-document mt-50 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div className="pull-left file-name">
            <p className="fs-16 color-black">
              FINANCIAL REPORT FOR PREVIOUS FINANCIAL YEAR
            </p>
            <p className="fs-12 color-grey mt-5">
              PDF, PNG, JPG files only with max. file size 6mb
            </p>
          </div>
          <div className="pull-right mt-10">
            <a href="#" className="fs-14">
              BROWSE
            </a>
          </div>
        </div>
        <div
          className="upload-document mt-50 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div className="pull-left file-name">
            <p className="fs-16 color-black">PAN CARD</p>
            <p className="fs-12 color-grey mt-5">
              PDF, PNG, JPG files only with max. file size 6mb
            </p>
          </div>
          <div className="pull-right mt-10">
            <a href="#" className="fs-14">
              BROWSE
            </a>
          </div>
        </div>
        <div
          className="upload-document mt-50 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div className="pull-left file-name">
            <p className="fs-16 color-black">GSTIN CERTIFICATE</p>
            <p className="fs-12 color-grey mt-5">
              PDF, PNG, JPG files only with max. file size 6mb
            </p>
          </div>
          <div className="pull-right mt-10">
            <a href="#" className="fs-14">
              BROWSE
            </a>
          </div>
        </div>
        <div
          className="upload-document mt-50 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div className="pull-left file-name">
            <p className="fs-16 color-black">MSME CERTIFICATE</p>
            <p className="fs-12 color-grey mt-5">
              PDF, PNG, JPG files only with max. file size 6mb
            </p>
          </div>
          <div className="pull-right mt-10">
            <a href="#" className="fs-14">
              BROWSE
            </a>
          </div>
        </div>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h4 className="fs-30 mt-50">Additional Documents</h4>
          <h6 className="mt-50">
            <img src="images/ic-add.png" height="24px" />
            &nbsp; Add Document
          </h6>
        </div>
        <div className="form-group col-sm-6 pl-0 mt-40">
          <label className="field-title mb-5">DOCUMENT NAME</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        {/*Upload Document*/}
        <div className="clear" />
        <div className="mt-120 text-right">
          {/* <a href="#" class="mr-80">SAVE</a> */}
          <button className="btn btn-lg  pull-right mt-60 "
           onClick={handleClick}
         >
            {/* PREVIOUS */}
            SUBMIT
          </button>
        
          <button
            className="btn btn-lg pull-right mt-60 mr-20"
          onclick="location.href='#'"
          >
            PREVIOUS
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

export default AccountCreationTwo