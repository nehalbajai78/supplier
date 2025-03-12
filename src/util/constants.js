export const CONSTANTS ={
    AUTH_SERVICE_BASE_URL:"http://localhost:8080/partner/api/v1/auth",
    ACCOUNT_SERVICE_BASE_URL:"http://localhost:8081/partner/api/v1/account",
    //  ACCOUNT_SERVICE_BASE_URL:" /api/partner/api/v1/account",

// headers

API_HEADER_CONTENT_TYPE:"Content-Type",
API_HEADER_APPLICATION_JSON:"application/json",

//signup end points
BUYERKNOWN_ENDPOINNT:"/signup",
SIGNUP_VALIDATE_BUYER_ENDPOINNT:"/validate-buyer",
PRODUCT_CATEGORY_ENDPOINNT:"/products",
BUYERUNKNOWN_SIGNUP_ENDPOINT:"/register",
RESEND_LINK_ENDPOINT:"/resendlink",

// error text 
FIELD_MANDATORY_MSG:"Field is mandatory, Please provide mandatory fields",

// auth end points
LOGIN_ENDPOINT:"/login",
VALIDATE_OTP_ENDPOINT:"/validate-otp",
EMAIL_VERIFICATION:"/activation",
LOGOUT_ENDPOINT:"/logout",
// forgate password
FORGOT_PASSWORD_ENDPOINT:"/forgot",
FORGOT_VALIDATE_OTP_ENDPOINT:"/validate-otp",
RESET_PASSWORD_ENDPOINT:"/reset"
}



