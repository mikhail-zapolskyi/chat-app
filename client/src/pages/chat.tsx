import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { io, Socket } from "socket.io-client";
import {
	ContactBoard,
	SearchContacts,
	SearchContactResult,
	ErrorMessage,
	ContactTab,
	UserTab,
	ChatMessage,
	ContactList,
	ChatInput,
	MenuTab,
} from "../components";
import { addContact, getContactList } from "../redux/contactsSlice";
import { getMessages, addMessage } from "../redux/messagesSlice";

const Chat = () => {
	const router = useRouter();
	const [socket, setSocket] = useState<Socket | null>(null);
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);
	const { contacts } = useAppSelector((state) => state);
	const { messages } = useAppSelector((state) => state);
	const [inputMessage, setInputMessage] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [searchResult, setSearchResult] = useState({ id: "", email: "" });
	const [roomId, setRoomId] = useState("");
	const [contact, setContact] = useState({ id: "" });
	const [error, setError] = useState("");

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

	const handleInputs = (e) => {
		e.preventDefault();

		if (e.target.name === "searchInput") {
			setSearchInput(e.target.value);
		}

		if (e.target.name === "chat_msg") {
			setInputMessage(e.target.value);
		}
	};

	const handleSendMessage = async (e) => {
		e.preventDefault();
		socket.emit("sendMessageToRoom", {
			message: inputMessage,
			roomId,
			userId: user.id,
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
					setError(data.errors.message);
					clear_error_message();
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
				userId: user.id,
				contactId: searchResult.id,
			})
		);
		clear_contact();
	};

	const clear_error_message = () => {
		setTimeout(() => {
			setError("");
		}, 3000);
	};

	const clear_contact = () => {
		setSearchResult({ id: "", email: "" });
	};

	return (
		<div className="chat">
			<div className="chat__contacts">
				{/* This div for the menuBoard */}
				<MenuTab />
				<ContactBoard>
					<p>{user && user.email}</p>
					<SearchContacts
						value={searchInput}
						onchange={handleInputs}
						onclick={find_contact}
					/>
					{error && <ErrorMessage message={error} />}
					{searchResult.id && (
						<SearchContactResult
							contact={searchResult}
							clearContact={clear_contact}
							addContact={add_contact}
						/>
					)}
					<ContactList>
						{user &&
							contacts.map((userContact) => {
								return (
									<ContactTab
										key={userContact.id}
										contact={userContact}
										onClick={() => {
											setRoomId(
												userContact.roomId
											);
											setContact(userContact);
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
						onChange={handleInputs}
						onClick={handleSendMessage}
					/>
				</div>
			)}
		</div>
	);
};

export default Chat;
