import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { io, Socket } from "socket.io-client";
import {
	LogoutBtn,
	ContactBoard,
	SearchContacts,
	SearchContactResult,
	Error,
	ContactTab,
	UserTab,
} from "../components";
import { addContact, getContactList } from "../redux/contactsSlice";

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
		dispatch(getContactList({ userId: user?.id }));
	}, [contacts]);

	useEffect(() => {
		if (!socket) {
			return;
		}

		socket.on("connect", () => {
			dispatch(getContactList({ userId: user?.id }));
		});

		socket.on("disconnect", () => {
			dispatch(getContactList({ userId: user?.id }));
		});

		socket.on("message", (data) => {
			const { message, userId } = data;
			console.log(message);
			setChatMessages((chatMessages) => [
				...chatMessages,
				{ userId, message },
			]);
		});

		return () => {
			socket.off("connect");
			socket.off("disconnect");
			socket.off("message");
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
			"http://localhost:4000/api/conversations",
			{
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ roomId }),
			}
		);

		const conversation = await response.json();
		if (conversation) {
			setChatMessages(conversation.messages);
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

	const generate_id = () => {
		return `id_${(Math.random() * 10000000000).toFixed(0)}`;
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
										}}
									/>
								);
							})}
					</div>
					<LogoutBtn />
				</ContactBoard>
			</div>
			{roomId && user && (
				<div className="chat-messageBoard">
					<UserTab contacts={contacts} roomId={roomId} />
					<ul className="chat-messageBoard__messages">
						{chatMessages.map((msg) => {
							return (
								<li
									className={
										user?.id === msg.userId
											? `chat-messageBoard__user-message`
											: `chat-messageBoard__contact-message`
									}
									key={generate_id()}
								>
									<h3>{msg.user}</h3>
									<p>{msg.message}</p>
								</li>
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
