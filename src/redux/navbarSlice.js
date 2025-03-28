import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeButton: "",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export const { setActiveButton } = navbarSlice.actions;
export default navbarSlice.reducer;
