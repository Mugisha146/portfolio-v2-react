import { Dispatch } from "redux";

export const submitContactForm = (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      dispatch({ type: "SUBMIT_CONTACT_FORM_SUCCESS", payload: data });
      // Handle success (e.g., show a success message)
    } catch (error) {
      dispatch({ type: "SUBMIT_CONTACT_FORM_ERROR", payload: error });
      // Handle error (e.g., show an error message)
    }
  };
};
