import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applications: [],
    loading: false,
  },
  reducers: {
    setApplications: (state, action) => {
      state.applications = action.payload; 
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setApplications, setLoading } = applicationSlice.actions;
export default applicationSlice.reducer;
