import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    jobDetails: null,
    employerJobs: [],
    loading: false,
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setJobDetails: (state, action) => {
      state.jobDetails = action.payload;
    },
    setEmployerJobs: (state, action) => {
      state.employerJobs = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setJobs, setJobDetails, setEmployerJobs, setLoading } =
  jobSlice.actions;
export default jobSlice.reducer;
