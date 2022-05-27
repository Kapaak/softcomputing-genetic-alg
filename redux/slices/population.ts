import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	populationSize: 0,
	mutationRate: 0,
	targetWord: "",
};

const populationSlice = createSlice({
	name: "population",
	initialState,
	reducers: {
		setup: (state, action) => {
			state.mutationRate = action.payload.mutationRate;
			state.populationSize = action.payload.populationSize;
			state.targetWord = action.payload.targetWord;
		},
		resetPopulation: () => initialState,
	},
});

export const { setup, resetPopulation } = populationSlice.actions;

export default populationSlice.reducer;
