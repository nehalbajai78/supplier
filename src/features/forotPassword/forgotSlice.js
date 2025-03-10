import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authaxiosInstance } from "../../api/axios";
import { CONSTANTS } from "../../util/constants";

const initialState = {
  username: "",
  fpStatus: "", //submitting, fpSuccess, fpFailed, voSuccess, voFailed, rpSuccess, rpFailed
  forgotPwdErrMsg: "",
  forgotPwdToken: "",
  partnerUserId: "",
  otpError: "",
  rpErrMsg: "",
};

export const forgotPassword = createAsyncThunk(
  "forgot/forgotPassword",
  async (payload, { rejectWithValue }) => {
    console.log(
      "forgotPassword thunk called with payload :" + JSON.stringify(payload)
    );
    const { username } = payload;
    console.log(payload);
    // call forgot passwrd API here..
    try {
      const response = await authaxiosInstance.post(
        CONSTANTS.FORGOT_PASSWORD_ENDPOINT,
        JSON.stringify({ username }),
        {
          headers: {
            // [CONSTANTS.API_HEADER_CONTENT_TYPE]:
            // CONSTANTS.API_HEADER_APPLICATION_JSON,
           "Content-Type": "application/json",
           "x-forwarded-host":"localhost:8080",
              
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

export const sendOtp = createAsyncThunk(
  "forgot/sendOtp",
  async (payload, { rejectWithValue }) => {
    console.log(
      "sendOtp thunk called with payload :" + JSON.stringify(payload)
    );
    const { username, otp, journey } = payload;
    // call  API here..
    try {
      const response = await authaxiosInstance.post(
        CONSTANTS.FORGOT_VALIDATE_OTP_ENDPOINT,
        JSON.stringify({ username, otp, journey }),
        {
          headers: {
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
      const data = error.response.data;
      const status = error.response.status;
      return rejectWithValue({ status, data });
    }
  }
);

export const resetPassword = createAsyncThunk(
  "forgot/resetPassword",
  async (payload, { rejectWithValue }) => {
    console.log(
      "resetPassword thunk called with payload :" + JSON.stringify(payload)
    );
    const { partnerUserId, password, forgotPwdToken } = payload;

    const bearerToken = `Bearer ${forgotPwdToken}`;
    console.log(bearerToken);

    // call  API here..
    try {
      const response = await authaxiosInstance.put(
        CONSTANTS.RESET_PASSWORD_ENDPOINT + "/" + partnerUserId,
        JSON.stringify({ password }),
        {
          headers: {
            Authorization: bearerToken,
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
      const data = error.response.data;
      const status = error.response.status;
      return rejectWithValue({ status, data });
    }
  }
);

const forgotSlice = createSlice({
  name: "forgot",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(forgotPassword.pending, (state, action) => {
        console.log("forgotPassword thunk promise pending..");
        console.log(action);
        state.fpStatus = "submitting";
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        console.log("forgotPassword thunk promise fullfilled..");
        console.log(action);
        state.fpStatus = "fpSuccess";
        state.username = action.payload.data.username;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        console.log("forgotPassword thunk promise rejected..");
        console.log(action);
        state.fpStatus = "fpFailed";
        console.log(
          action.payload?.data.usernameErrMsg !== null
            ? action.payload?.data.usernameErrMsg
            : action.payload?.data.message !== null
            ? action.payload?.data.message
            : ""
        );
        state.forgotPwdErrMsg =
          action.payload?.data.usernameErrMsg !== null
            ? action.payload?.data.usernameErrMsg
            : action.payload?.data.message !== null
            ? action.payload?.data.message
            : "";
      })

      .addCase(sendOtp.pending, (state, action) => {
        console.log("sendOtp thunk promise pending..");
        console.log(action);
        state.fpStatus = "submitting";
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        console.log("sendOtp thunk promise fulfilled..");
        console.log(action);
        state.fpStatus = "voSuccess";
        state.forgotPwdToken = action.payload.data.token;
        state.partnerUserId = action.payload.data.partnerUserId;
        state.otpError = "";
      })
      .addCase(sendOtp.rejected, (state, action) => {
        console.log("sendOtp thunk promise rejected..");
        console.log(action);
        state.fpStatus = "voFailed";
        state.otpError = action.payload.data.otpErrMsg;
      })

      .addCase(resetPassword.pending, (state, action) => {
        console.log("resetPassword thunk promise pending..");
        console.log(action);
        state.fpStatus = "submitting";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        console.log("resetPassword thunk promise fulfilled..");
        console.log(action);
        state.fpStatus = "rpSuccess";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        console.log("resetPassword thunk promise rejected..");
        console.log(action);
        state.fpStatus = "rpFailed";
        state.rpErrMsg = action.payload.data.passwordErrMsg;
      }),
});

//export const { forgotPwdStatus } = forgotSlice.actions;
export default forgotSlice.reducer;
