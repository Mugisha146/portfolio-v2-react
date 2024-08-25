export interface AuthState {
  user: any | null;
  token: string | null;
}

export interface SignUpAction {
  type: "SIGN_UP_SUCCESS";
  payload: any;
}

export interface LogInAction {
  type: "LOG_IN_SUCCESS";
  payload: any;
}

export interface ResetPasswordAction {
  type: "RESET_PASSWORD_SUCCESS";
  payload: any;
}

export type AuthActionTypes = SignUpAction | LogInAction | ResetPasswordAction;
