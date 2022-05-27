import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	members: [],
	currentGeneration: 1,
	numberOfMutations: 0,
	active: false,
	maxFitness: 0,
	mutations:0
};

const dynamicStateSlice = createSlice({
	name: "dynamicState",
	initialState,
	reducers: {
		updateMembers: (state, action) => {
			state.members = action.payload.members;
			state.active = true;

			console.log(action.payload,"payload")
			state.mutations += action.payload.mutations;
			if (action.payload.maxFitness > state.maxFitness)
				state.maxFitness = action.payload.maxFitness;
		},
		updateGeneration: state => {
			state.currentGeneration += 1;
		},
		resetDynamicState: () => initialState,
	},
});

export const { updateMembers, updateGeneration, resetDynamicState } =
	dynamicStateSlice.actions;

export default dynamicStateSlice.reducer;
