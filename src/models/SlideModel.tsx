import { createSlice } from "@reduxjs/toolkit";

export const SlideModel = createSlice({
  name: "slide",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      console.log("increment");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("decrement");
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = SlideModel.actions;

export default SlideModel.reducer;
