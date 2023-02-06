import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  logoFile:"",
  backgroundPicture: "",
  website: "",
  linkedin: "",
  instagram: "",
  twitter: "",
  facebook: "",
  others: "",
  guarantorInformation: "",
  company: "",
  jobRole: "",
  officeAddress: "",
  guarantorNumber: "",
  guarantorEmail: "",
  teamMemberFirstName: "",
  teamMemberLastName: "",
  teamMemberEmail: "",
  teamMemberRole: "",
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editProfile: (state, { payload }) => {
      // alert(payload.value.name)
      Object.assign(state, { [payload.name]: payload.value });
    },
  },
});

export const { editProfile } = profileSlice.actions;

export default profileSlice.reducer;
