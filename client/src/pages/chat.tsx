import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { io, Socket } from "socket.io-client";
import {
	ContactBoard,
	SearchContactsTab,
	SearchContactResultCard,
	ErrorMessage,
	ContactTab,
	UserTab,
	ChatMessage,
	ContactList,
	ChatInput,
	MenuBoard,
	AdditionalMenu,
	UserCard,
} from "../components";
import { addContact, getContactList } from "../redux/contactsSlice";
import { getMessages, addMessage } from "../redux/messagesSlice";
import { getError } from "../redux/errorSlice";
import { IUser } from "@/interfaces/IUser";
import { IContact } from "@/interfaces/IContact";

const Chat = () => {
	const router = useRouter();
	const [socket, setSocket] = useState<Socket | null>(null);
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth) as {
		user: IUser | null;
	};
	const { contacts, messages, menuTab } = useAppSelector((state) => state);
	const [inputMessage, setInputMessage] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [searchResult, setSearchResult] = useState({ id: "", email: "" });
	const [roomId, setRoomId] = useState("");
	const [contact, setContact] = useState({ id: "" }) as [IContact, any];

	// Check if user is logged in
	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user]);

	// Get messages and update chatMessages state
	useEffect(() => {
		if (roomId) {
			dispatch(getMessages(roomId));
		}
	}, [roomId, dispatch]);

	useEffect(() => {
		const newSocket = io("http://localhost:4000", {
			auth: { userId: user?.id },
		});
		setSocket(newSocket);
		return () => {
			newSocket.disconnect();
		};
	}, [user]);

	useEffect(() => {
		if (!socket) {
			return;
		}

		socket.on("userOnlineStatusChanged", async () => {
			dispatch(getContactList({ userId: user?.id }));
		});

		socket.on("message", (newMessage) => {
			dispatch(addMessage(newMessage));
		});

		return () => {
			socket.off("message");
			socket.off("userOnlineStatusChanged");
		};
	}, [socket]);

	const handleSearchInputOnChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		e.preventDefault();

		setSearchInput(e.target.value);
	};

	const handleChatTextAreaOnChange = async (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		e.preventDefault();

		setInputMessage(e.target.value);
	};

	const handleSendMessage = async () => {
		socket?.emit("sendMessageToRoom", {
			message: inputMessage,
			roomId,
			userId: user?.id,
		});
		setInputMessage("");
	};

	const find_contact = async () => {
		fetch("http://localhost:4000/api/contacts/find", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: searchInput,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.errors) {
					dispatch(getError(data.errors.message));
				}

				if (data.contact) {
					setSearchResult(data.contact);
					setSearchInput("");
				}
			});
	};

	const add_contact = () => {
		dispatch(
			addContact({
				userId: user?.id,
				contactId: searchResult.id,
			})
		).then((res) => {
			if (res.payload.errors) {
				dispatch(getError(res.payload.errors.message));
			}
		});
		clear_contact();
	};

	const clear_contact = () => {
		setSearchResult({ id: "", email: "" });
	};

	return (
		<div className="chat">
			<div className="chat__contacts">
				{/* This div for the menuBoard */}
				<MenuBoard />
				<ContactBoard>
					<UserCard user={user} />
					{menuTab.type === "contacts" && (
						<ContactList>
							{user &&
								contacts.map((userContact) => {
									return (
										<ContactTab
											key={userContact.id}
											userId={user.id}
											contact={userContact}
											onClick={() => {
												setRoomId(
													userContact.roomId
												);
												setContact(
													userContact
												);
											}}
											active={
												contact?.id ===
												userContact.id
													? true
													: false
											}
										/>
									);
								})}
						</ContactList>
					)}
					{menuTab.type === "addContact" && (
						<AdditionalMenu>
							<SearchContactsTab
								value={searchInput}
								onchange={handleSearchInputOnChange}
								onclick={find_contact}
							/>
							{searchResult.id && (
								<SearchContactResultCard
									contact={searchResult}
									addContact={add_contact}
								/>
							)}
						</AdditionalMenu>
					)}
				</ContactBoard>
			</div>
			{roomId && user && (
				<div className="chat-messageBoard">
					<UserTab contacts={contacts} roomId={roomId} />
					<ul className="chat-messageBoard__messages">
						{messages.map((msg) => {
							return (
								<ChatMessage
									key={msg.id}
									id={msg.id}
									msg={msg.message}
									isContact={
										msg.userId === user.id
											? false
											: true
									}
									contact={contact}
									date={msg.createdAt}
								/>
							);
						})}
					</ul>
					<ChatInput
						input={inputMessage}
						onChange={handleChatTextAreaOnChange}
						onClick={handleSendMessage}
					/>
				</div>
			)}
			<ErrorMessage />
		</div>
	);
};

export default Chat;
