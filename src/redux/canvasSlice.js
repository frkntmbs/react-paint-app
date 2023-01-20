// color picker slice

import { createSlice } from "@reduxjs/toolkit";

export const canvasSlice = createSlice({
	name: "canvas",
	initialState: {
		color: "black",
		penSize: 5,
		brush: "round",
	},
	reducers: {
		setColor: (state, action) => {
			state.color = action.payload;
		},
		setPenSize: (state, action) => {
			state.penSize = action.payload;
		},
		setBrush: (state, action) => {
			state.brush = action.payload;
		},
	},
});

export const { setColor, setPenSize, setBrush } = canvasSlice.actions;

export default canvasSlice.reducer;
