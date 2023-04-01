import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IChatMessage {
	id: string;
	roomId: string;
	userId: string;
	message: string;
	createdAt: Date;
}

const initialState = {
	messages: [] as IChatMessage[],
};

export const getMessages = createAsyncThunk(
	"messages/getMessages",
	async (roomId: string) => {
		const response = await fetch(`/api/messages/${roomId}/messages`);
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
			state.messages = payload;
		});
	},
});
