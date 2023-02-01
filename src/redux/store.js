import { configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import signUpSlice from "./slices/signUpSlice";

const store = configureStore({
  reducer: {
    signup: signUpSlice.reducer,
    login: loginSlice.reducer
    
  },
});

export default store;