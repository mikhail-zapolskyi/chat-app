import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IContact {
	userId: string;
	contactId?: string;
}

export const getContactList = createAsyncThunk(
	"contacts/getContactList",
	async (userId: IContact) => {
		const response = await fetch(
			`http://localhost:4000/api/contacts/contact-list`,
			{
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userId),
			}
		);

		return await response.json();
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (id: IContact) => {
		const response = await fetch(
			`http://localhost:4000/api/contacts/add`,
			{
				method: "PATCH",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(id),
			}
		);

		return await response.json();
	}
);

export const contactsSlice = createSlice({
	name: "contacts",
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		// ADD CONTACT
		builder.addCase(addContact.fulfilled, (state, { payload }) => {
			return (state = payload.contacts);
		});
		// GET CONTACTS LIST
		builder.addCase(getContactList.fulfilled, (state, { payload }) => {
			return (state = payload.contacts);
		});
	},
});
