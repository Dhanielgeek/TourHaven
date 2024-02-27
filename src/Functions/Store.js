import {configureStore} from '@reduxjs/toolkit'
import MySliceReducer from './Features'

const MyStore = configureStore({
    reducer:{
        mySlice : MySliceReducer
    }
})

export default MyStore;