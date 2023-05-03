import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

const devUrl = "http://localhost:4000/api";
const productionUrl = "https://chat-app-vlw6.onrender.com/api";
const url = process.env.NODE_ENV === "development" ? devUrl : productionUrl;

interface IChatMessage {
	id: string;
	roomId: string;
	userId: string;
	message: string;
	createdAt: string;
}

const initialState = [] as IChatMessage[];

export const getMessages = createAsyncThunk(
	"messages/getMessages",
	async (roomId: string) => {
		const response = await fetch(`${url}/rooms/${roomId}/messages`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	}
);

export const addMessage = createAction(
	"messages/addMessage",
	(message: IChatMessage) => ({
		payload: {
			message,
		},
	})
);

export const deleteMessage = createAsyncThunk(
	"messages/deleteMessage",
	async (messageId: string) => {
		const response = await fetch(`${url}/messages/${messageId}`, {
			method: "DELETE",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	}
);

export const messagesSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMessages.fulfilled, (state, { payload }) => {
			return payload;
		});

		builder.addCase(addMessage, (state, { payload }) => {
			state.push(payload.message);
		});

		builder.addCase(deleteMessage.fulfilled, (state, { payload }) => {
			return state.filter((message) => message.id !== payload.id);
		});
	},
});
