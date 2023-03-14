import { createSlice } from "@reduxjs/toolkit";
import { checkBox } from "../../event/pages/checkBoxData";

const initialState = {
  tags: [],
  genderList: [],
  genderListNew: [],
  religionList: [],
  religionListNew: [],
  educationLevelList: [],
  educationLevelListNew: [],
  maritalStatusList: [],
  maritalStatusListNew: [],
  employmentStatusList: [],
  employmentStatusListNew: [],
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
    addToList: (state, action) => {
      const { listType, newItem } = action.payload;
      const newList = newItem
        .trim()
        .split(",")
        .map((item) => item.trim());
      const finalArray = [
        ...[...state[listType]].filter((x) => checkBox[listType].includes(x)),
        ...newList,
      ];
      // console.log(finalArray, newList);
      state[listType] = finalArray.filter((x) => x !== "");
      state[`${listType}New`] = newList.filter((x) => x !== "");
    },
    clearEvent: (state) => {
      Object.keys(state).forEach((each) =>
        Object.assign(state, { [each]: "" })
      );
    },
    addTag: (state, action) => {
      if (state.tags.length < 5) {
        state.tags.push(action.payload);
      }
    },
    removeTag: (state, action) => {
      const index = state.tags.findIndex((tag) => tag === action.payload);
      if (index !== -1) {
        state.tags.splice(index, 1);
      }
    },
  },
});

export const {
  editGenerally,
  clearEvent,
  editCheckbox,
  addToList,
  addTag,
  removeTag,
} = createEventSlice.actions;

export default createEventSlice.reducer;
