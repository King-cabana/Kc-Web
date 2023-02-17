import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organizerName: "",
  email: "",
  phoneNumber: "",
  address: "",
  state: "",
  country: "",
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
    clearProfile: (state) => {
      Object.keys(state).forEach((each) =>
        Object.assign(state, { [each]: "" })
      );
    },
  },
});

export const { editProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
