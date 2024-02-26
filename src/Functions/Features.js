import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers:{
        userData : (state,{payload})=>{
            state.user =payload
        }
    }
})

export const {userData} = MySlice.actions;
export default MySlice.reducer