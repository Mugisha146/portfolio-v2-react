// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./slices/skillsSlice";
import projectsReducer from "./slices/projectsSlice";
import blogReducer from "./slices/blogSlice"; // Ensure this is correct
import authReducer from "./slices/authSlice"; // Import the auth reducer

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer,
    blogs: blogReducer, // This line should work if the blogReducer is correctly exported
  auth: authReducer, // Add the auth reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
