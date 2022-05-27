const { configureStore } = require("@reduxjs/toolkit");
import dynamicStateReducer from "./slices/dynamicState";
import populationReducer from "./slices/population";

const store = configureStore({
	reducer: {
		population: populationReducer,
		dynamicState: dynamicStateReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
