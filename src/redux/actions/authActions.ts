import { Dispatch } from "redux";
import {
  logIn as apiLogIn,
  signUp as apiSignUp,
  resetPassword as apiResetPassword,
} from "../../services/api";

// Action types
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

// Log In action
export const logIn =
  (credentials: { email: string; password: string }) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await apiLogIn(credentials);
      dispatch({ type: LOG_IN_SUCCESS, payload: response });
    } catch (error: unknown) {
      // Cast error to 'unknown'
      const err = error as any; // Cast error to 'any' or define a specific error interface if needed
      console.error("Login error:", err);
      const errorMessage = err.response
        ? err.response.data?.message || "Login failed"
        : "Network error occurred"; // Handle network errors
      dispatch({
        type: LOG_IN_FAILURE,
        payload: errorMessage,
      });
    }
  };

// Sign Up action
export const signUp =
  (userData: { name: string; email: string; password: string }) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await apiSignUp(userData);
      dispatch({ type: SIGN_UP_SUCCESS, payload: response });
    } catch (error: unknown) {
      // Cast error to 'unknown'
      const err = error as any; // Cast error to 'any' or define a specific error interface if needed
      console.error("Sign up error:", err);
      const errorMessage = err.response
        ? err.response.data?.message || "Sign up failed"
        : "Network error occurred"; // Handle network errors
      dispatch({
        type: SIGN_UP_FAILURE,
        payload: errorMessage,
      });
    }
  };

// Reset Password action
export const resetPassword =
  (data: { email: string; newPassword: string }) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await apiResetPassword(data);
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response });
    } catch (error: unknown) {
      // Cast error to 'unknown'
      const err = error as any; // Cast error to 'any' or define a specific error interface if needed
      console.error("Reset password error:", err);
      const errorMessage = err.response
        ? err.response.data?.message || "Reset password failed"
        : "Network error occurred"; // Handle network errors
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        payload: errorMessage,
      });
    }
  };
