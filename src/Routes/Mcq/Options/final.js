import { createSlice } from "@reduxjs/toolkit";

const arrayOfFinalSelectedOptions=createSlice({
    name:'finalAnswers',
    initialState:[],
    reducers:{addUserchoice:(state,action)=>{
        const filterdArray=state.filter((i)=>i.questionNumber!==action.payload.questionNumber)
         return [...filterdArray,action.payload]
    }
}
})
export default arrayOfFinalSelectedOptions.reducer
export const {addUserchoice}=arrayOfFinalSelectedOptions.actions