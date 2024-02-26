import { configureStore } from "@reduxjs/toolkit";
import MySliceReducer from './Features'

const MyStore = configureStore({
    reducer: {
        user: MySliceReducer
    }
})

export default MyStore;
