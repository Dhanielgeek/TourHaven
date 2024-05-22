import { configureStore } from '@reduxjs/toolkit';
import MySliceReducer from './Features';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, MySliceReducer);

export const MyStore = configureStore({
  reducer: {
    mySlice: persistedReducer,
  },
});

export const persistor = persistStore(MyStore);
