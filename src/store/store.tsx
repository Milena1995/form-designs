import { configureStore } from "@reduxjs/toolkit";
import SlideModel from "../models/SlideModel";

export default configureStore({
  reducer: {
    slide: SlideModel,
  },
});
