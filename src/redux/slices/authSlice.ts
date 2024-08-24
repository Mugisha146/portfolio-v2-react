// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { email: string } | null; // Modify as per your user structure
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInSuccess(state, action: PayloadAction<{ email: string }>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    logInFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    logOut(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

// Export actions
export const { logInSuccess, logInFailure, logOut } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
