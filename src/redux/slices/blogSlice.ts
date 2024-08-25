import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs } from "../../services/api"; 


export const fetchBlogs = createAsyncThunk("api/blogs", async () => {
  const response = await getBlogs(); 
  return response;
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
        state.status = "loading"; 
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";  
        state.blogs = action.payload; 
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});


export default blogSlice.reducer;
