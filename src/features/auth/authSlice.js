import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authaxiosInstance } from "../../api/axios";
import { CONSTANTS } from "../../util/constants";

const initialState = {
  username: "",
  status: "", //unauthenticated,submitting,loginerror,loginsuccess,otperror,locked,authenticated,tokenValidationFailed
  token: "",
  expirationTime: "",
  loginError: {
    usernameErrMsg: "",
    passwordErrMsg: "",
    loginErrorMessage: "",
  },
  otpError: { otpErrMsg: "" },
  partnerUserId: "",
  channel: "",
  logoutStatus: "",
  logoutApiStatus: "",
  refreshTokenErrMsg: "",
};

export const doLogin = createAsyncThunk(
  "auth/doLogin",
  async (payload, { rejectWithValue }) => {
    console.log(
      "doLogin thunk called with payload :" + JSON.stringify(payload)
    );
    const { username, password } = payload;
    // call login API here..
    try {
      const response = await authaxiosInstance.post(
         CONSTANTS.LOGIN_ENDPOINT,
        JSON.stringify({ username, password }),
        {
          headers: {
            "Content-Type": "application/json",
            "x-forwarded-host": "localhost:8080",
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
      return rejectWithValue({
        loginErrorMessage: "Please check your network connectivity.",
      });
    }
  }
);

// call logout api
export const doLogout = createAsyncThunk(
  "auth/doLogout",
  async (payload, { rejectWithValue }) => {
    // call logout API here..
    try {
      const response = await authaxiosInstance.get(CONSTANTS.LOGOUT_ENDPOINT, {});
      console.log(response.status);
      return response.status;
    } catch (error) {
      console.log("Axios api call errored out...");
      console.log(error);
      return rejectWithValue({
        // countryErrMsg: error.message,
      });
    }
  }
);
// call refresh token
// export const doRefreshToken = createAsyncThunk(
//   "auth/doRefreshToken",
//   async (payload, { rejectWithValue }) => {
//     const { token } = payload;
//     // const bearerToken = `Bearer ${token}`;
//     console.log("Token -------", token);
//     // call refresh token API here..
//     try {
//       const response = await authaxiosInstance.post(
//         CONSTANTS.REFRESH_TOKEN_ENDPOINT,
//         JSON.stringify({
//           token,
//         }),
//         {
//           headers: {
//             [CONSTANTS.API_HEADER_CONTENT_TYPE]:
//               CONSTANTS.API_HEADER_APPLICATION_JSON,
//           },
//         }
//       );

//       return response;
//     } catch (error) {
//       console.log("Axios api call errored out...");
//       console.log(error);
//       return rejectWithValue({
//         refreshTokenErrMsg: error.message,
//       });
//     }
//   }
// );
export const doValidateOtp = createAsyncThunk(
  "auth/doValidateOtp",
  async (payload, { rejectWithValue }) => {
    console.log(
      "doValidateOtp thunk called with payload :" + JSON.stringify(payload)
    );
    const { username, otp, journey } = payload;
    // call login API here..
    try {
      const response = await authaxiosInstance.post(
        CONSTANTS.VALIDATE_OTP_ENDPOINT,
        JSON.stringify({ username, otp, journey }),
        {
          headers: {
            // "Content-Type": "application/json",
            // "x-forwarded-host": "localhost:8080",
            [CONSTANTS.API_HEADER_CONTENT_TYPE]:
              CONSTANTS.API_HEADER_APPLICATION_JSON,
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
      return rejectWithValue({
        loginErrorMessage: "Please check your network connectivity.",
      });
    }
  }
);

// export const doValidateToken = createAsyncThunk(
//   "auth/doValidateToken",
//   async (payload, { rejectWithValue }) => {
//     console.log(
//       "doValidateToken thunk called with payload :" + JSON.stringify(payload)
//     );
//     // call token API here with cookie
//     try {
//       const response = await authaxiosInstance.get(CONSTANTS.TOKEN_ENDPOINT, {
//         withCredentials: true,
//       });
//       console.log(response);
//       if (response?.data?.error) {
//         return rejectWithValue(response?.data);
//       }
//       return response.data;
//     } catch (error) {
//       console.log(
//         "Axios api " + CONSTANTS.VALIDATE_OTP_ENDPOINT + "call errored out..."
//       );
//       console.log(error);
//       return rejectWithValue(error.message);
//     }
//   }
// );

//checkActivation
export const emailVerification = createAsyncThunk(
  "auth/emailVerification",
  async (payload, { rejectWithValue }) => {
    console.log("adsdads", payload);
    const { actCode } = payload;
    // call emailVerification API here..
    try {
      const response = await authaxiosInstance.get(
        CONSTANTS.EMAIL_VERIFICATION + "/" + actCode,
        {}
      );
      console.log(response);
      if (response?.data?.error) {
        return rejectWithValue(response?.data);
      }
      return response.data;
    } catch (error) {
      console.log("Axios api call errored out...");
      console.log(error);
      return rejectWithValue({
        // verificationError: error.message,
      });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //login
    login(state, action) {
      console.log("login reducer..");
      console.log(action);
      state.username = action.payload;
    },
    //validate-otp
    validateOtp(state, action) {
      console.log("validate otp reducer..");
      console.log(action);
      state.token = action.payload;
    },
    //token
    token(state, action) {
      console.log("token reducer called...");
    },
    //emailVerification
    emailVerification(state, action) {
      console.log("emailVerification reducer..");
      console.log(action);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(doLogin.pending, (state, action) => {
        console.log("doLogin thunk promise pending..");
        console.log(action);
        state.status = "submitting";
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        console.log("doLogin thunk promise fullfilled..");
        console.log(action);
        state.status =
          action.payload.data.token === null ? "loginsuccess" : "";
        state.username = action.payload.data.username;
        state.loginError.usernameErrMsg = "";
        state.loginError.passwordErrMsg = "";
        state.loginError.loginErrorMessage = "";
        state.token = action.payload.data.token;
        state.channel = action.payload.data.channel;
        state.partnerUserId = action.payload.data.partnerUserId;
        state.token = action.payload.data.token;
      })
      .addCase(doLogin.rejected, (state, action) => {
        console.log("doLogin thunk promise rejected..");
        console.log(action);
        state.status = "loginerror";
        state.loginError.usernameErrMsg = action.payload.data.usernameErrMsg;
        state.loginError.passwordErrMsg = action.payload.data.passwordErrMsg;
        state.loginError.loginErrorMessage = action.payload.data.message;
      })
      .addCase(doValidateOtp.pending, (state, action) => {
        console.log("doValidateOtp thunk promise pending..");
        console.log(action);
        state.status = "submitting";
        state.expirationTime = "";
      })
      .addCase(doValidateOtp.fulfilled, (state, action) => {
        console.log("doValidateOtp thunk promise fulfilled..");
        console.log(action);
        state.status = "authenticated";
        state.token = action.payload.data.token;
        state.partnerUserId = action.payload.data.partnerUserId;
        state.otpError.otpErrMsg = "";
        state.expirationTime = action.payload.data.expirationTime;
      })
      .addCase(doValidateOtp.rejected, (state, action) => {
        console.log("doValidateOtp thunk promise rejected..");
        console.log(action);
        state.status = "otperror";
        state.otpError.otpErrMsg = action.payload.data.otpErrMsg;
      })
    //   .addCase(doValidateToken.pending, (state, action) => {
    //     console.log("doValidateToken thunk promise pending..");
    //     console.log(action);
    //     state.status = "submitting";
    //   })
    //   .addCase(doValidateToken.fulfilled, (state, action) => {
    //     console.log("doValidateToken thunk promise fulfilled..");
    //     console.log(action);
    //     state.status = "authenticated";
    //     state.token = action.payload.data.jwt;
    //     state.partnerUserId = action.payload.data.puid;
    //     state.otpError.otpErrMsg = "";
    //   })
    //   .addCase(doValidateToken.rejected, (state, action) => {
    //     console.log("doValidateToken thunk promise rejected..");
    //     console.log(action);
    //     state.status = "tokenValidationFailed";
    //     // state.otpError.otpErrMsg = action.payload.data.otpErrMsg;
    //   })
      .addCase(doLogout.pending, (state, action) => {
        console.log("doLogout thunk promise pending..");
        console.log(action);
        state.logoutStatus = "Processing";
        state.status = "unauthenticated";
      })
      .addCase(doLogout.fulfilled, (state, action) => {
        console.log("doLogout thunk promise fullfilled..");
        console.log(action);
        state.logoutStatus = "logoutSuccessfull";
        state.status = "unauthenticated";
        state.token = "";
        state.logoutApiStatus = action.payload;
      })
      .addCase(doLogout.rejected, (state, action) => {
        console.log("doLogout thunk promise rejected..");
        console.log(action);
        state.logoutStatus = "logoutRejected";
      })
    //   .addCase(doRefreshToken.pending, (state, action) => {
    //     console.log("doRefreshToken thunk promise pending..");
    //     console.log(action);
    //     // state.status = "refreshingToken";
    //     state.expirationTime = "";
    //   })
    //   .addCase(doRefreshToken.fulfilled, (state, action) => {
    //     console.log("doRefreshToken thunk promise fulfilled..");
    //     console.log(action);
    //     state.status = "authenticated";
    //     state.token = action.payload.data.data.jwt;
    //     state.expirationTime = action.payload.data.data.expirationTime;
    //   })
    //   .addCase(doRefreshToken.rejected, (state, action) => {
    //     console.log("doRefreshToken thunk promise rejected..");
    //     console.log(action);
    //     state.status = "unauthenticated";
    //   }),
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
