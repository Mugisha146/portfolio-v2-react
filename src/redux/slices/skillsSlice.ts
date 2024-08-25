import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api"; 

interface Skill {
  imgSrc: string;
  name: string;
  description: string;
}

interface SkillsState {
  skills: Skill[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: SkillsState = {
  skills: [],
  status: "idle",
};


export const fetchSkills = createAsyncThunk("skills/fetchSkills", async () => {
  const response = await api.getSkills(); 
  return response; 
});

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchSkills.fulfilled,
        (state, action: PayloadAction<Skill[]>) => {
          state.status = "succeeded";
          state.skills = action.payload; 
        }
      )
      .addCase(fetchSkills.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default skillsSlice.reducer;
