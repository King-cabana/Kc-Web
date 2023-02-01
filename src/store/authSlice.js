import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
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
    },
    loginStart: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const {
  signupStart,
  signupSuccess,
  signupFailure,
  loginStart,
  loginSuccess,
  loginFailure
} = authSlice.actions;

export default authSlice.reducer;


