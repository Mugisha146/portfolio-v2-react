import { Dispatch } from "redux";

export const submitContactForm = (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        "https://portifolio-backend-api.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      dispatch({ type: "SUBMIT_CONTACT_FORM_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "SUBMIT_CONTACT_FORM_ERROR", payload: error });
    }
  };
};
