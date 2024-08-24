const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "LOG_IN_FAILURE":
      return { ...state, error: action.payload };
    case "SIGN_UP_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "SIGN_UP_FAILURE":
      return { ...state, error: action.payload };
    case "RESET_PASSWORD_SUCCESS":
      return { ...state, error: null };
    case "RESET_PASSWORD_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
