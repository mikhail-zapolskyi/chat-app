import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
		const response = await fetch(
			`http://localhost:4000/api/rooms/${roomId}/messages`,
			{
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		return data;
	}
);

export const deleteMessage = createAsyncThunk(
	"messages/deleteMessage",
	async (messageId: string) => {
		const response = await fetch(
			`http://localhost:4000/api/messages/${messageId}`,
			{
				method: "DELETE",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
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

		builder.addCase(deleteMessage.fulfilled, (state, { payload }) => {
			return state.filter((message) => message.id !== payload.id);
		});
	},
});
