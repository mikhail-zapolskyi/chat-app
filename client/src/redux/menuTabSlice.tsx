import { createAction, createSlice } from "@reduxjs/toolkit";

// State types:
// contacts | settings | addContact

const initialState = {
	type: "contacts",
};

export const changeMenu = createAction("menuTab/changeMenuTab", (type) => {
	return {
		payload: {
			...initialState,
			type,
		},
	};
});

export const menuTabSlice = createSlice({
	name: "menuTab",
	initialState,
	reducers: {
		changeMenuTab: (state, action) => {
			state.type = action.payload.type;
		},
	},
});
