import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: [],
    companyDetails: null,
  },
  reducers: {
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setCompanyDetails: (state, action) => {
      state.companyDetails = action.payload;
    },
  },
});

export const { setCompanies, setCompanyDetails } = companySlice.actions;
export default companySlice.reducer;
