import { createSlice, createAction } from "@reduxjs/toolkit";

interface ErrorState {
	error: string | null;
}

const initialState: ErrorState = {
	error: null,
};

export const getError = createAction("error/getError", (error: string) => ({
	payload: error,
}));
export const errorSlice = createSlice({
	name: "error",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getError, (state, action) => {
			state.error = action.payload;
		});
	},
});
