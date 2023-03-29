import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { io, Socket } from "socket.io-client";
import {
	Button,
	ContactBoard,
	SearchContacts,
	SearchContactResult,
	Error,
	ContactTab,
	UserTab,
	Message,
} from "../components";
import { addContact, getContactList } from "../redux/contactsSlice";
import { logoutUser } from "../redux/authSlice";

const Chat = () => {
	const router = useRouter();
	const [socket, setSocket] = useState<Socket | null>(null);
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);
	const { contacts } = useAppSelector((state) => state);
	const [inputMessage, setInputMessage] = useState("");
	const [chatMessages, setChatMessages] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [searchResult, setSearchResult] = useState({ id: "", email: "" });
	const [roomId, setRoomId] = useState("");
	const [contact, setContact] = useState({});
	const [error, setError] = useState("");

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
			setChatMessages((chatMessages) => [...chatMessages, newMessage]);
		});

		return () => {
			socket.off("message");
			socket.off("userOnlineStatusChanged");
		};
	}, [socket]);

	useEffect(() => {
		const checkAuth = setTimeout(() => {
			if (!user) {
				router.push("/login");
			}
		}, 500);

		return () => clearTimeout(checkAuth);
	}, [user]);

	const getConversation = async (roomId) => {
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
		const room = await response.json();

		if (room) {
			setChatMessages(room.messages);
		} else {
			setChatMessages([]);
		}
	};

	const handleInputs = (e) => {
		e.preventDefault();

		if (e.target.name === "searchInput") {
			setSearchInput(e.target.value);
		}

		if (e.target.name === "chat_msg") {
			setInputMessage(e.target.value);
		}
	};

	const handleSubmit = async (e) => {
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

	const logout = () => {
		console.log("logout");
		dispatch(logoutUser());
	};
	console.log(chatMessages);
	return (
		<div className="chat">
			<div className="chat-contacts">
				<ContactBoard>
					<div>
						<p>{user && user.email}</p>
						<SearchContacts
							value={searchInput}
							onchange={handleInputs}
							onclick={find_contact}
						/>
						{error && <Error message={error} />}
						{searchResult.id && (
							<SearchContactResult
								contact={searchResult}
								clearContact={clear_contact}
								addContact={add_contact}
							/>
						)}
						<h3>Contacts</h3>
						{user &&
							contacts.map((contact) => {
								return (
									<ContactTab
										key={contact.id}
										contact={contact}
										onclick={() => {
											setRoomId(
												contact.roomId
											);
											getConversation(
												contact.roomId
											);
											setContact(contact);
										}}
									/>
								);
							})}
					</div>
					<Button text="Logout" onClick={logout} />
				</ContactBoard>
			</div>
			{roomId && user && (
				<div className="chat-messageBoard">
					<UserTab contacts={contacts} roomId={roomId} />
					<ul className="chat-messageBoard__messages">
						{chatMessages.map((msg) => {
							return (
								<Message
									key={msg._id}
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
					<div className="chat-input">
						<textarea
							className="chat-input__textarea"
							name="chat_msg"
							value={inputMessage}
							onChange={handleInputs}
						></textarea>
						<button
							className="chat-input__btn btn"
							onClick={handleSubmit}
						>
							Send
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Chat;
