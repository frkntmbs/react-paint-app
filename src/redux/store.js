import { configureStore } from "@reduxjs/toolkit";
import { canvasSlice } from "./canvasSlice";

export const store = configureStore({
	reducer: {
		canvas: canvasSlice.reducer,
	},
});
