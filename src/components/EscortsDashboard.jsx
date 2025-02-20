import React from 'react'

function Maindashboard() {
  return (
    <>
      <main id="wrapper" style={{ background: "#fff" }}>
  {/*Header*/}
  <div ui-view="header">
    <header hide-in-app="">
      <nav className="navbar navbar-default">
        <div className="container-fluid large-menu">
          <div className="navbar-header mt-20">
            <a target="_self" href="/login">
              <picture className="navbar-brand">
                <source srcSet="/images/escortskubota.png" type="image/webp" />
                <img src="/images/escortskubota.png" alt="logo" />
              </picture>
            </a>
          </div>
          <div className="pull-right nav-icon-navbaar mt-10">
            <a href="/" className="color-red">
              <img src="images/ic-logout.png" width="30px" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  </div>
  {/*Header*/}
  {/*Content*/}
  <section className="container " style={{marginBottom:"15rem" , background: "#fff"}}>
   
    <div className="col-lg-12 mt-30 pt-30 pl-0 pr-0  " >
      <div className="mb-50">
        <h4 className="fs-30 pull-left"> Select Your Role </h4>
        <div className="clear" />
        <p className="color-grey fs-16 mt-10">
          <span className="">Your Profile information is mentioned here</span>
        </p>
        <div className="clear" />
      </div>

      <a href="/buyerscreenbu" className="info-cards-1">
        <p className="">
          {" "}
          <img src="/images/ic-category.png" alt="" width="40px;" />
        </p>
        <p className="fs-14 ">BUYER</p>
      </a>
      <a
        href="/buyerduediliance"
        className="info-cards-1 ml-30"
      >
        <p className="">
          {" "}
          <img src="images/ic-category.png" alt="" width="40px;" />
        </p>
        <p className="fs-14 ">DUE DILIGENCE</p>
      </a>
      <a href="/buyerscreeingapone" className="info-cards-1 ml-30">
        <p className="">
          {" "}
          <img src="images/ic-category.png" alt="" width="40px;" />
        </p>
        <p className="fs-14 ed">AP-1</p>
      </a>
     
      <a href="/buyerscreeingaptwo" className="info-cards-1 mt-30">
        <p className="">
          {" "}
          <img src="images/ic-category.png" alt="" width="40px;" />
        </p>
        <p className="fs-14">AP-2</p>
      </a>
      <a
        href="/buyerScreening"
        className="info-cards-1 ml-30 mt-30"
      >
        <p className="">
          {" "}
          <img src="images/ic-category.png" alt="" width="40px;" />
        </p>
        <p className="fs-14 ">SUPPLIER</p>
      </a>
      <a href="/accountcretion" className="info-cards-1 ml-30 mt-30">
        <p className="">
          {" "}
          <img src="images/ic-category.png" alt="" width="40px;" />
        </p>
        <p className="fs-14 ">SUPER USER</p>
      </a>
    </div>
  </section>
  {/*Content*/}
  <div className="clear" />
  {/*Footer*/}
  <footer className="" style={{ position: "fixed", bottom: 0 }}>
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
</main>

    
    
    </>
  )
}

export default Maindashboard