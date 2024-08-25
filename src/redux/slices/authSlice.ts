import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { email: string } | null; 
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

export const { logInSuccess, logInFailure, logOut } = authSlice.actions;

export default authSlice.reducer;
