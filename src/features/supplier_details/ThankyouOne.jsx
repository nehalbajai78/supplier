import React from 'react'
import { useNavigate } from "react-router-dom"; 
function ThankYouOne() {
  const navigate = useNavigate()
const handleClick = ()=>{
navigate("/")
}

const handleRoute =() =>{
  navigate("/accountcretion")
}

  return (
    <>
    
    <main id="wrapper">
  {/*Content*/}
  <section className="flex-container">
    <section className="width-35 pl-80 pr-100 minH-100vh">
      <div className="mb-50 mt-40">
        {" "}
        <a href="">
          {" "}
          <img src="images/escortskubota.png" width={156} alt="" />{" "}
        </a>{" "}
      </div>
    </section>
    <section className="width-65 pl-150 pr-100 bg-white pb-50">
      <h3 className="mt-100 fs-60 line-70">
        <img src="images/gr-thankyou.png" className="mb-50" height="140px" />{" "}
        <br />
        <span className="color-green mt-50">Thank You!</span>
      </h3>
      <p className="fs-16 color-grey mt-10">
        Your request has been routed to your Escorts Kubota Buyer.
      </p>
      <p className="fs-16 color-grey mt-10">
        Approval process may take a few days. Post approval supplier code will
        be sent on your registered email ID.{" "}
      </p>
      <button
        className="btn btn-lg pull-right mt-60"
       onClick={handleRoute}
      >
        CLOSE
      </button>
      <button
        className="btn btn-lg pull-right mt-60 mr-20"
        onClick={handleClick}
      >
        NEXT FLOW
      </button>
    </section>
  </section>
  {/*Content*/}
</main>

    
    </>
  )
}

export default ThankYouOne