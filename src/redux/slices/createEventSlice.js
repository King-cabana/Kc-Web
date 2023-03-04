import { createSlice } from "@reduxjs/toolkit";
// import produce from "immer";

const initialState = {
  tags: [],
  genderList: [],
  religionList: [],
  educationLevelList: [],
  maritalStatusList: [],
  employmentStatusList: [],
  exclusiveContent: [],
  otherOnline: [],
  signage: [],
  databaseMarketing: [],
  otherPromotionalOpportunities: [],
  mediaProfile: [],
  research: [],
  contra: [],
  production: [],
  causeTieIn: [],
};

export const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    editGenerally: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    editCheckbox: (state, { payload }) => {
      const { category, item } = payload;
      Object.assign(state, { [category]: item });
      //   console.log(payload);
    },

    clearEvent: (state) => {
      Object.keys(state).forEach((each) =>
        Object.assign(state, { [each]: "" })
      );
    },
  },
});

export const { editGenerally, clearEvent, editCheckbox } =
  createEventSlice.actions;

export default createEventSlice.reducer;
