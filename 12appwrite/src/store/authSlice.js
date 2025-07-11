import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,         // ✅ boolean for authentication state
    userData: null         // ✅ to store logged-in user info
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData; // ✅ assumes userData passed in payload
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
