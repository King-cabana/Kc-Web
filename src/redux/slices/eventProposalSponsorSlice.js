import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventCompleted: 0,
  eventDrafted: 0,
  eventTotal: 0,
  proposalCompleted: 0,
  proposalDrafted: 0,
  proposalTotal: 0,
  sponsorsMatched: 0,
  sponsorsInProgress: 0,
  sponsorsRejected: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state[payload] += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
