import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "./css/standardization.css";
import "./css/selfcare.css";
import "./css/vendor.css";
import "./css/progress.css";

// import Vendorprofile from './features/';
// import Thankyou from './features/supplier/Thankyou';
// import SupplierCode from './features/supplier/SupplierCode';
// import RejectionTitle from './features/supplier/RejectionTitle';
// import PaymentTerms from './features/supplier/PaymentTerms';
// import Addnew from './features/supplier/Addnew';
// import BuyerScreening from './features/supplier/BuyerScreening';
// import Otp from './features/supplier/Otp';
// import Createpassword from './features/supplier/Createpassword';
import Maindashboard from './components/EscortsDashboard';
import AccountCreation from './features/supplier_details/AccountCreation';
import AccountCreationOne from './features/supplier_details/AccontCreationOne';
import AccountCreationTwo from './features/supplier_details/AccountCreationTwo';
import SupplierDetails from './features/supplier_details/SupplierDetails';
import ThankYouNo from './features/signup/ThankYou';
import ThankYouOne from './features/supplier_details/ThankyouOne';
import UserLogin from './features/auth/UserLogin';
// import BuyerScreingBu from './features/buyer/BuyerScreeingBu';
// import CompanyInfoBu from './features/buyer/CompanyInfoBu';
// import PaymentBu from './features/buyer/PaymentBu';
// import RejectionTermBu from './features/buyer/RejectionTermBu';
// import BuyerScreingDu from './features/due_diliance/BuyerScreeingDu';
// import CompanyInfoDu from './features/due_diliance/CompanyInfoDu';
// import PaymentDu from './features/due_diliance/PaymentDu';
// import PaymentoneDu from './features/due_diliance/PaymentoneDu';
// import RejectionDu from './features/due_diliance/RejectionDu';
// import BuyerscreingApone from './features/ap_1/BuyerscreeingApone';
// import RejectionApone from './features/ap_1/RejectionApone';
// import PaymentApone from './features/ap_1/PaymentApone';
// import RatingApone from './features/ap_1/RatingApone';
// import CompanyinfoApone from './features/ap_1/CompanyinfoApone';
// import RejectionAptwo from './features/ap_2/RejectionAptwo';
// import BuyerscreeingAptwo from './features/ap_2/BuyerscreeingAptwo';
// import PaymentAptwo from './features/ap_2/PaymentAptwo';
// import RatingAptwo from './features/ap_2/RatingAptwo';
// 
import Signup from './features/signup/Signup';
import SignupnoForm from './features/signup/SignupnoForm';
// import ForgatePage from './features/forotPassword/ForgotePwd';
import ForgateOtp from './features/forotPassword/ResetOtp';
import SignUpYesForm from './features/signup/SignupyesForm';
import TermsCondition from './features/signup/TermsCondition';
import ThankYouSu from "./features/signup/ThankYou"
import TyWithResendLink from './features/signup/TyWithResendLink';
import ThankYou from './features/signup/ThankYou';
import SendOtp from './features/forotPassword/SendOtp';
import Testing from './features/forotPassword/Testing';
import ResetOtp from './features/forotPassword/ResetOtp';
import ForgatePwd from './features/forotPassword/ForgotePwd';

const router = createBrowserRouter(
  [
    {
      path:'/test',
      element:<Testing />,
    },
  {
    path:'/dashboard',
    element:<Maindashboard />,
  },
  {
    path:'/thankyou',
    element:<ThankYou />,
  },
 
  {
    path:'/',
    element:<UserLogin />,
  },
  // forgote pssword
  {
    path:'/resetotp',
    element:<ResetOtp />,
  },
  {
    path:'/forgotPWD',
    element:<ForgatePwd />,
  },
  {
    path:'/sendOtp',
    element:<SendOtp />,
  },
  // singup
 
  {
    path:'/signup',
    element:<Signup />,
  },
  {
    path:'/signUpNoForm',
    element:<SignupnoForm />,
  },
  {
    path:'/signUpYesForm',
    element:<SignUpYesForm />,
  },
  {
    path:'/termsAndCondition',
    element:<TermsCondition />,
  },
  {
    path:'/thankyousu',
    element:<ThankYouSu />,
  },
  {
    path:'/tywithresendlink',
    element:<TyWithResendLink />,
  },
  // supplier
  // {
  //   path:'/buyerScreening',
  //   element:<BuyerScreening/> 
  // },
  // {
  //   path:'/createPassword',
  //   element:<Createpassword/>
  // },
  // {
  //   path:'/otp',
  //   element: <Otp/>
  // },
  // {
  //   path:'/paymentTerms',
  //   element:<PaymentTerms/>
  // },
  // {
  //   path:'/rejectionTitle',
  //   element:<RejectionTitle/>
  // },
  // {
  //   path:'/supplierCode',
  //   element:<SupplierCode/>
  // },
  // {
  //   path:'/thankyou',
  //   element: <Thankyou/>
  // },
  // {
  //   path:'/vendorProfile',
  //   element:<Vendorprofile/>
  // },
  // {
  //   path:'/viewSite',
  //   element:<ViewSite/>
  // },
  // supplierdetails
  {
    path:'/accountcretion',
    element:<AccountCreation/>
  },
  {
    path:'/accountcretionone',
    element:<AccountCreationOne/>
  },
  {
    path:'/accountcretiontwo',
    element:<AccountCreationTwo/>
  },
  {
    path:'/supplierdetails',
    element:<SupplierDetails/>
  },
  {
    path:'/thankyousu',
    element:<ThankYou/>
  },
  {
    path:'/thankyouone',
    element:<ThankYouOne/>
  },
  {
    path:'/buyerlogin',
    element:<UserLogin />,
  },
  // buyerbu
  // {
  //   path:'/buyerscreenbu',
  //   element:<BuyerScreingBu />,
  // },
  // {
  //   path:'/companyinfobu',
  //   element:<CompanyInfoBu />,
  // },
  // {
  //   path:'/paymentbu',
  //   element:<PaymentBu />,
  // },
  // {
  //   path:'/rejectionbu',
  //   element:<RejectionTermBu />,
  // },

// due_diliance
// {
//   path:'/buyerduediliance',
//   element:<BuyerScreingDu />,
// },
// {
//   path:'/companyinfodu',
//   element:<CompanyInfoDu />,
// },
// {
//   path:'/payementdu',
//   element:<PaymentDu />,
// },
// {
//   path:'/payemntduone',
//   element:<PaymentoneDu />,
// },
// {
//   path:'/rejectiondu',
//   element:<RejectionDu />,
// },
// ap1
// {
//   path:'/buyerscreeingapone',
//   element:<BuyerscreingApone />,
// },
// {
//   path:'/rejectionapone',
//   element:<RejectionApone />,
// },
// {
//   path:'/paymentapone',
//   element:<PaymentApone />,
// },
// {
//   path:'/viewratingapone',
//   element:<RatingApone />,
// },
// {
//   path:'/companyinfoapone',
//   element:<CompanyinfoApone />,
// },

// ap two
// {
//   path:'/rejectionaptwo',
//   element:<RejectionAptwo />,
// },
// {
//   path:'/buyerscreeingaptwo',
//   element:<BuyerscreeingAptwo />,
// },
// {
//   path:'paymentaptwo',
//   element:<PaymentAptwo />,
// },
// {
//   path:'/viewratingaptwo',
//   element:<RatingAptwo />,
// },

  ]
);


function App() {
  return <RouterProvider router ={router}/>
    
}

export default App;
