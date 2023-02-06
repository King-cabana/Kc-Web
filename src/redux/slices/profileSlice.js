import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  backgroundPicture: "",
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editProfile: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
  },
});

export const { editProfile } = profileSlice.actions;

export default profileSlice.reducer;
