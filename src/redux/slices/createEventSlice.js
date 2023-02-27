import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    editEvent: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    clearEvent: (state) => {
      Object.keys(state).forEach((each) =>
        Object.assign(state, { [each]: "" })
      );
    },
  },
});

export const { editEvent, clearEvent } = createEventSlice.actions;

export default createEventSlice.reducer;
