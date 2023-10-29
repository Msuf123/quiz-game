import { createSlice } from "@reduxjs/toolkit";
import { data } from "./initailState";

const questions=createSlice({
    name:'questions',
    initialState:data,
    
})
export default questions.reducer