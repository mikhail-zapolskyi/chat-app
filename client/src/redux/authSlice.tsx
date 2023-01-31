import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
		builder.addCase(fetchUser.pending, (state, action) => {});
		builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
		builder.addCase(fetchUser.rejected, (state, action) => {});
		// LOGIN USER
		builder.addCase(loginUser.pending, (state, action) => {});
		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
		builder.addCase(loginUser.rejected, (state, action) => {});
		// REGISTER USER
		builder.addCase(registerUser.pending, (state, action) => {});
		builder.addCase(registerUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
		builder.addCase(registerUser.rejected, (state, action) => {});
		// LOGOUT USER
		builder.addCase(logoutUser.pending, (state, action) => {});
		builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
		builder.addCase(logoutUser.rejected, (state, action) => {});
	},
});
