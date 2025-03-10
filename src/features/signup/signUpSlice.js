import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import {accountaxiosInstance} from "../../api/axios"
import { CONSTANTS } from "../../util/constants";


const initialState ={
    signUpStatus:"",
    buyerEmail:"",
    buyerError:"",
    emailErr: "",
  mobileErr: "",
  passwordErr: "",
  partnerUserId: "",
  partnerEmail: "",
  pcData: null, // Default should be null
  EmailErrMsg: "",
  UrlErrMsg: "",
  


};


export const validateBuyer = createAsyncThunk(
    "signUp/validateBuyer",
    async (payload, { rejectWithValue }) => {
      console.log(
        "validateBuyer thunk called with payload :" + JSON.stringify(payload)
      );
      const { buyerEmail } = payload;
      console.log(payload);
      // call login API here..
      try {
        const response = await accountaxiosInstance.post(
          CONSTANTS.SIGNUP_VALIDATE_BUYER_ENDPOINNT,
          JSON.stringify({
            buyerEmail,
           
          }),
          {
            headers: {
              "Content-Type": "application/json",
              // [CONSTANTS.API_HEADER_CONTENT_TYPE]:
              //   CONSTANTS.API_HEADER_APPLICATION_JSON,
                "x-forwarded-host":"localhost:8081",
              
                
            },
          
          }
        );
        // console.log("headers",headers);
        
        console.log("ssss",response);
        if (response?.data?.error) {
          return rejectWithValue(response?.data);
        }
        return response.data;
      } catch (error) {
        console.log("Axios api call errored out...");
        console.log(error);
        const data = error.response.data;
        const status = error.response.status;
        return rejectWithValue({ status, data });
      }
    }
  );
  
  export const productCategory = createAsyncThunk(
    "signUp/productCategory",
    async (payload, { rejectWithValue }) => {
      console.log(
        "productCategory thunk called with payload :" + JSON.stringify(payload)
      );
      const {} = payload;
      // call login API here..
      try {
        const response = await accountaxiosInstance.get(
          CONSTANTS.PRODUCT_CATEGORY_ENDPOINNT,
  
          JSON.stringify({}),
          {
            headers: {
              "Content-Type": "application/json",
                "x-forwarded-host":"localhost:8081",
            },
          }
        );
        console.log(response);
        if (response?.data?.error) {
          return rejectWithValue(response?.data);
        }
        return response.data;
      } catch (error) {
        console.log("Axios api call errored out...");
        console.log(error);
        const data = error.response.data;
        const status = error.response.status;
        return rejectWithValue({ status, data });
      }
    }
  );

  export const buyerKnown = createAsyncThunk(
    "signUp/buyerknown",
    async (payload, { rejectWithValue }) => {
      console.log(
        "buyerknown thunk called with payload :" + JSON.stringify(payload)
      );
      const { buyerEmail, email, mobileNumber, password } = payload;
      // call login API here..
      try {
        const response = await accountaxiosInstance.post(
          CONSTANTS.BUYERKNOWN_ENDPOINNT,
          JSON.stringify({
            buyerEmail,
            email,
            mobileNumber,
            password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "x-forwarded-host":"localhost:8081",
              // [CONSTANTS.API_HEADER_CONTENT_TYPE]:
              //   CONSTANTS.API_HEADER_APPLICATION_JSON,
            },
          }
        );
        console.log(response);
        if (response?.data?.error) {
          return rejectWithValue(response?.data);
        }
        return response.data;
      } catch (error) {
        console.log("Axios api call errored out...");
        console.log(error);
        const data = error.response.data;
        const status = error.response.status;
        return rejectWithValue({ status, data });
      }
    }
  );
  export const buyerUnknown = createAsyncThunk(
    "signUp/buyerUnknown",
    async (payload, { rejectWithValue }) => {
      console.log(
        "buyerUnknown thunk called with payload :" + JSON.stringify(payload)
      );
      const { partnerEmail, companyUrl, productAndServiceCategory } = payload;
      // call login API here..
      try {
        const response = await accountaxiosInstance.post(
          CONSTANTS.BUYERUNKNOWN_SIGNUP_ENDPOINT,
          JSON.stringify({
            partnerEmail,
            companyUrl,
            productAndServiceCategory,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "x-forwarded-host":"localhost:8081",
            },
          }
        );
        console.log(response);
        if (response?.data?.error) {
          return rejectWithValue(response?.data);
        }
        return response.data;
      } catch (error) {
        console.log("Axios api call errored out...");
        console.log(error);
        const data = error.response.data;
        const status = error.response.status;
        return rejectWithValue({ status, data });
      }
    }
  );
  
  export const resendLink = createAsyncThunk(
    "signUp/resendLink",
    async (payload, { rejectWithValue }) => {
      console.log(
        "resendLink thunk called with payload :" + JSON.stringify(payload)
      );
      const { partnerUserId } = payload;
      // call login API here..
      try {
        const response = await accountaxiosInstance.post(
          CONSTANTS.RESEND_LINK_ENDPOINT,
          JSON.stringify({
            partnerUserId,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "x-forwarded-host":"localhost:8081",
            },
          }
        );
        console.log(response);
        if (response?.data?.error) {
          return rejectWithValue(response?.data);
        }
        return response.data;
      } catch (error) {
        console.log("Axios api call errored out...");
        console.log(error);
        const data = error.response.data;
        const status = error.response.status;
        return rejectWithValue({ status, data });
      }
    }
  );
const signUpSlice = createSlice({
    name:"signUp",
    initialState,
    reducers:{},
    extraReducers:(builder)=>
        builder

    .addCase(validateBuyer.pending, (state, action) => {
        console.log("validateBuyer thunk promise pending..");
        console.log(action);
        state.signUpStatus = "submitting";
      })
      .addCase(validateBuyer.fulfilled, (state, action) => {
        console.log("validateBuyer thunk promise fulfilled..");
        console.log(action);
        state.signUpStatus = "vbsuccess";
        state.buyerEmail = action.payload.data.buyerEmail;
      })
      .addCase(validateBuyer.rejected, (state, action) => {
        console.log("validateBuyer thunk promise rejected..");
        console.log(action);
        state.signUpStatus = "vbfailed";
        state.buyerError = action.payload.data.buyerEmailErrMsg;
        //state.buyerError = response?.data.data.buyerEmailErrMsg;
      })
      // productlist
      .addCase(productCategory.pending, (state, action) => {
        console.log("productCategory thunk promise pending..");
        console.log(action);
        state.signUpStatus = "submitting";
      })
      .addCase(productCategory.fulfilled, (state, action) => {
        console.log("productCategory thunk promise fulfilled..");
        console.log(action);
        state.signUpStatus = "pcsuccess";
        state.pcData = action.payload.data;
      })
      .addCase(productCategory.rejected, (state, action) => {
        console.log("productCategory thunk promise rejected..");
        console.log(action);
        state.signUpStatus = "pcfailed";
      })
      // buyerknown
      .addCase(buyerKnown.pending, (state, action) => {
        console.log("buyerKnown thunk promise pending..");
        console.log(action);
        state.signUpStatus = "submitting";
      })
      .addCase(buyerKnown.fulfilled, (state, action) => {
        console.log("buyerKnown thunk promise fulfilled..");
        console.log(action);
        state.signUpStatus = "bksuccess";
        state.partnerUserId = action.payload.data.partnerUserId;
        state.partnerEmail = action.payload.data.email;
      })
      .addCase(buyerKnown.rejected, (state, action) => {
        console.log("buyerKnown thunk promise rejected..");
        console.log(action);
        state.signUpStatus = "bkfailed";
        state.emailErr = action.payload.data.emailErrMsg;
        state.mobileErr = action.payload.data.mobileNumberErrmsg;
        state.passwordErr = action.payload.data.passwordErrMsg;
      })
      // buyerknown
      .addCase(buyerUnknown.pending, (state, action) => {
        console.log("buyerUnknown thunk promise pending..");
        console.log(action);
        state.signUpStatus = "submitting";
      })
      .addCase(buyerUnknown.fulfilled, (state, action) => {
        console.log("buyerUnknown thunk promise fulfilled..");
        console.log(action);
        state.signUpStatus = "busuccess";
      })
      .addCase(buyerUnknown.rejected, (state, action) => {
        console.log("buyerUnknown thunk promise rejected..");
        console.log(action);
        state.signUpStatus = "bufailed";
        state.EmailErrMsg = action.payload.data.partnerEmailErrMsg;
        state.UrlErrMsg = action.payload.data.companyUrlErrMsg;
      })
      // resendlink
      .addCase(resendLink.pending, (state, action) => {
        console.log("resendLink thunk promise pending..");
        console.log(action);
        state.signUpStatus = "submitting";
      })
      .addCase(resendLink.fulfilled, (state, action) => {
        console.log("resendLink thunk promise fulfilled..");
        console.log(action);
        state.signUpStatus = "rlsuccess";
        state.partnerUserId = action.payload.data.partnerUserId;
        console.log("tesgggt",action.payload.data.partnerUserId);
        
      })
      .addCase(resendLink.rejected, (state, action) => {
        console.log("resendLink thunk promise rejected..");
        console.log(action);
        state.signUpStatus = "rlfailed";
      }),
})
export default signUpSlice.reducer;