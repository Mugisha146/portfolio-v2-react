import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./slices/skillsSlice";
import projectsReducer from "./slices/projectsSlice";
import blogReducer from "./slices/blogSlice"; 
import authReducer from "./slices/authSlice"; 

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer,
    blogs: blogReducer,
  auth: authReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
