import { createSlice } from "@reduxjs/toolkit";

const selectedAnswer=createSlice({
    name:'selected',
    initialState:[],
    reducers:{
        select:(state,action)=>{
            return [action.payload]
        }
    }
})
export default selectedAnswer.reducer
export const {select}=selectedAnswer.actions