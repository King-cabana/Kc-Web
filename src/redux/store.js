import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import signUpSlice from "./slices/signUpSlice";
import profileSlice from "./slices/profileSlice";

const store = configureStore({
  reducer: {
    signup: signUpSlice.reducer,
    login: loginSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export default store;
