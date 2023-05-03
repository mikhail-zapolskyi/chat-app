import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUrl } from "@/helpers/GetUrl";

interface IAuth {
	email: string;
	password: string;
	confirmPassword?: string;
}

const url = getUrl();

// CHECK IF USER STILL LOGEDIN
export const getUser = createAsyncThunk("auth/getUser", async () => {
	const response = await fetch(`${url}/user`, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await response.json();
});

export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async (data: IAuth) => {
		const response = await fetch(`${url}/login`, {
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
		const response = await fetch(`${url}/register`, {
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
	const response = await fetch(`${url}/logout`, {
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
	initialState: { user: null, loading: true },
	reducers: {},
	extraReducers: (builder) => {
		// CHECK IF USER STILL LOGEDIN
		builder.addCase(getUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
			state.loading = false;
		});
		// LOGIN USER
		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
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
