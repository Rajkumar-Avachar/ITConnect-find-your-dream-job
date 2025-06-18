import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    jobDetails: null,
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setJobDetails: (state, action) => {
      state.jobDetails = action.payload;
    },
  },
});

export const { setJobs, setJobDetails } = jobSlice.actions;
export default jobSlice.reducer;
