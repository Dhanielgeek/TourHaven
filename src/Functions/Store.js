import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './Features'

const MyStore = configureStore({
    reducer: {
        user: userSliceReducer
    }
})

export default MyStore;
