import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL_2 = "https://api.kingcabana.com/proposals/";
export const createProposal = (data, token) => async (dispatch) => {
  try {
    const response = await axios.post(
        API_URL_2 + "create",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(addProposal(response.data));
  } catch (error) {
    console.log(error);
  }
};

const proposalSlice = createSlice({
  name: "proposal",
  initialState: { proposals: [] },
  reducers: {
    addProposal: (state, action) => {
      state.proposals.push(action.payload);
    },
    removeProposal: (state, action) => {
      const index = state.proposals.findIndex(
        (proposal) => proposal.id === action.payload.id
      );
      if (index !== -1) {
        state.proposals.splice(index, 1);
      }
    },
  },
});

export const { addProposal, removeProposal } = proposalSlice.actions;
export default proposalSlice.reducer;
