import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organizerName: "",
  email: "",
  phoneNumber: "",
  address: "",
  organizerDetails: "",
  logoUrl: "",
  backgroundPictureUrl: "",
  website: "",
  linkedIn: "",
  instagram: "",
  twitter: "",
  faceBook: "",
  otherHandle: "",
  guarantorRole: "",
  secondaryContactFullName: "",
  jobRole: "",
  officeAddress: "",
  secondaryContactEmail: "",
  secondaryContactPhoneNumber: "",
  companyName: "",
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
