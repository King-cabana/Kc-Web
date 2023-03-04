import { createSlice } from "@reduxjs/toolkit";
import { ContactLogoBody } from "../../pages/contactUs/ContactUsStyled";

const initialState = {isSignedIn:false, details:{}};

const userDetailsSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      // state = action.payload
      Object.assign(state, {
        isSignedIn:true, details:action.payload
      })
      // return { message: action.payload };
    },
    clearUserDetails: (state, action) => {
      Object.assign(state, {
        isSignedIn:false, details:{}
      })
    },
  },
});

// const { reducer, actions } = userDetailsSlice;

export const { setUserDetails, clearUserDetails } = userDetailsSlice.actions
export default userDetailsSlice.reducer;