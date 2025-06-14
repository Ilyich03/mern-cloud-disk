import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import fileReducer from './fileReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    files: fileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});