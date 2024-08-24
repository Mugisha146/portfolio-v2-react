import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Project {
  imgSrc: string;
  title: string;
  description: string;
}

interface ProjectsState {
  projects: Project[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  status: "idle",
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await axios.get("/api/projects");
    return response.data;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error on new fetch
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch projects";
      });
  },
});

export default projectsSlice.reducer;
