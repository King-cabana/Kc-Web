import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

const signupSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupStart: state => {
      state.isLoading = true;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    signupFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const {
  signupStart,
  signupSuccess,
  signupFailure
} = signupSlice.actions;

export default signupSlice.reducer;


