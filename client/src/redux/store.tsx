import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { contactsSlice } from "./contactsSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		contacts: contactsSlice.reducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
