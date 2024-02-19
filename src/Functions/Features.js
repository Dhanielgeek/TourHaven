import {createSlice} from '@reduxjs/toolkit'

const InitialState = {
    user : []
}

const userSlice = createSlice({
    name: 'user',
    initialState: InitialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.user = {payload}
            console.log("USER IS HERE",state.user);
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer