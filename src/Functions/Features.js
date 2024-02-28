// Redux slice
import { createSlice } from '@reduxjs/toolkit';

const MySlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    userToken : ''
  },
  reducers: {
    Userdata: (state, { payload }) => {
      state.user = payload;
    },
    UserToken: (state,{payload})=>{
        state.userToken = payload
    },
    RemoveUser: (state)=>{
      state.user = {}
      state.userToken = ''
    }
 
  }
});

export const { Userdata,UserToken,RemoveUser } = MySlice.actions;
export default MySlice.reducer;