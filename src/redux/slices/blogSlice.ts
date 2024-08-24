// src/redux/slices/blogSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs } from "../../services/api"; // Ensure the correct path to your API methods

// Async thunk for fetching blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await getBlogs(); // Call the API function to get blogs
  return response; // Return the fetched data
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading"; // Set loading status
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set succeeded status
        state.blogs = action.payload; // Set fetched blogs
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed"; // Set failed status
      });
  },
});

// Export the actions and reducer
export default blogSlice.reducer;
