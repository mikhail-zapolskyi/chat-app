import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IContact } from "../interfaces/IContact";
import { getUrl } from "../helpers/GetUrl";

const url = getUrl();

export const getContactList = createAsyncThunk(
	"contacts/getContactList",
	async (id: {}) => {
		const response = await fetch(`${url}/contacts/contact-list`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(id),
		});

		return await response.json();
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (data: {}) => {
		const response = await fetch(`${url}/contacts/add`, {
			method: "PATCH",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		return await response.json();
	}
);

export const removeContact = createAsyncThunk(
	"contacts/removeContact",
	async (data: {}) => {
		const response = await fetch(`${url}/contacts/remove`, {
			method: "DELETE",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		return await response.json();
	}
);

export const contactsSlice = createSlice({
	name: "contacts",
	initialState: [] as IContact[],
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
		// REMOVE CONTACT
		builder.addCase(removeContact.fulfilled, (state, { payload }) => {
			return (state = state.filter((contact) => {
				return contact.id !== payload._id;
			}));
		});
	},
});
