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
  otherPromotionalActivities: [],
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
    editEvent: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    // editInventory: (state, action) => {
    //   const { category, item, checked } = action.payload;
    //   const categoryItems = state[category];
    //   if (checked) {
    //     categoryItems?.push(item);
    //   } else {
    //     const index = categoryItems?.indexOf(item);
    //     categoryItems?.splice(index, 1);
    //   }
    // },
    // editInventory: (state, action) => {
    //   const { category, item, checked } = action.payload;
    //   const categoryItems = state[category];
    //   const index = categoryItems?.indexOf(item);

    //   return produce(state, (draftState) => {
    //     if (checked) {
    //       if (index === -1) {
    //         draftState[category]?.push(item);
    //       }
    //     } else {
    //       if (index !== -1) {
    //         draftState[category]?.splice(index, 1);
    //       }
    //     }
    //   });
    // },
    editInventory: (state, action) => {
      const { category, item, checked } = action.payload;
      const categoryItems = state[category];
      const index = categoryItems?.indexOf(item);
      if (checked) {
        if (index === -1) {
          state[category]?.push(item);
        }
      } else {
        if (index !== -1) {
          state[category]?.splice(index, 1);
        }
      }
      // Return the updated state object
      return state;
    },

    clearEvent: (state) => {
      Object.keys(state).forEach((each) =>
        Object.assign(state, { [each]: "" })
      );
    },
  },
});

export const { editEvent, clearEvent, editInventory } =
  createEventSlice.actions;

export default createEventSlice.reducer;
