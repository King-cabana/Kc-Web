  import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSignedIn: false, details: {} };

const userDetailsSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      // state = action.payload
      Object.assign(state, {
        isSignedIn: true,
        details: action.payload,
      });
      // return { message: action.payload };
    },
    setUserToken: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    clearUserDetails: (state, action) => {
      Object.assign(state, {
        isSignedIn: false,
        details: {},
      });
    },
    
  },
}); 


export const { setUserDetails, clearUserDetails, setUserToken } =
  userDetailsSlice.actions;
export default userDetailsSlice.reducer;
