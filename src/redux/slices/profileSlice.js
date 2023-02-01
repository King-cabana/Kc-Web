import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  //dummy data
  initialState: {
    name: "",
    email: "",
    file: "",
  },
  //responds to the action, takes the current state, handles the action similar to database tables
  reducers: {
    editProfile: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
      //   state.push(todo);
    },
  },
});

export const { editProfile } = profileSlice.actions;

export default profileSlice.reducer;
