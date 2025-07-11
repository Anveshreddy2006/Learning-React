// store.jsx
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
 // ✅ correct the path if needed

const store = configureStore({
  reducer: {
    auth: authReducer, // ✅ this enables state.auth.status
  },
});

export default store;
