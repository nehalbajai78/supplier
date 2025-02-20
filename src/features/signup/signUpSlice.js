import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { CONSTANTS } from "../../util/constants";

const initialState ={

};







const signUpSlice = createSlice({
    name:"signup",
    initialState,
    reducers:{},
    extraReducers:(builder)=>
        builder
})
export default signUpSlice.reducer;