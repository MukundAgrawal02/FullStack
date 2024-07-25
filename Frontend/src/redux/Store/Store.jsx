import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from '../Slices/animalsSlice';
import { apiSlice } from '../Slices/apiSlice';

const store = configureStore({
  reducer: {
    // Added reducers here
    animals: animalsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Added middleware here 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
