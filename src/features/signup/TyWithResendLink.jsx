import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { resendLink } from './signUpSlice'
function TyWithResendLink() {

const dispatch = useDispatch();

const { partnerUserId, partnerEmail } = useSelector((state) => state.signUp);


const handleClick = () =>{
  dispatch(resendLink({ partnerUserId }))
  console.log("test",partnerUserId);
}

// const handleClick = () => {
//   if (!partnerUserId) {
//     console.error("❌ partnerUserId is undefined or null");
//     return;
//   }

//   dispatch(resendLink({ partnerUserId }))
//     .unwrap()
//     .then((response) => {
//       console.log("✅ Resend link successful:", response);
//     })
//     .catch((error) => {
//       console.error("❌ Resend link failed:", error);
//     });

//   console.log("🚀 Dispatching resendLink with:", partnerUserId);
// };

  return (
   <>
<main id="wrapper">
  {/*Content*/}
  <section className="flex-container">
    <section className="width-35 pl-80 pr-100 minH-100vh">
      <div className="mb-50 mt-40">
        {" "}
        <a href="#">
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
        An email with the verification link has been sent to your email id:
        <span className="color-black">{partnerEmail}</span> Please click
        on the verification link to proceed further. The link will be valid for
        2 days.
      </p>
     
     <p className='mt-20'>
<Link className='link' onClick={handleClick}>
Resend Link &nbsp;{""}
<i className='icon-outlined-link-right-arrow'/>
</Link>
     </p>
    </section>
  </section>
  {/*Content*/}
</main>

   
   </>
  )
}

export default TyWithResendLink