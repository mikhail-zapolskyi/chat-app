import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import build from "next/dist/build";

interface IAuth {
	email: string;
	password: string;
	confirmPassword?: string;
}

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
	const response = await fetch(`http://localhost:4000/api/user`, {
		method: "GET",
		credentials: "include",
	});
	return await response.json();
});

export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async (data: IAuth) => {
		const response = await fetch(`http://localhost:4000/api/login`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return await response.json();
	}
);

export const registerUser = createAsyncThunk(
	"auth/registerUser",
	async (data: IAuth) => {
		const response = await fetch(`http://localhost:4000/api/register`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return await response.json();
	}
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
	const response = await fetch(`http://localhost:4000/api/logout`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	});

	return await response.json();
});

export const authSlice = createSlice({
	name: "auth",
	initialState: { user: null },
	reducers: {},
	extraReducers: (builder) => {
		// CHECK IF USER STILL LOGEDIN
		builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
		// LOGIN USER
		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
		builder.addCase(loginUser.rejected, (state, { payload }) => {
			state.user = payload;
		});
		// REGISTER USER
		builder.addCase(registerUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
		// LOGOUT USER
		builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
	},
});
