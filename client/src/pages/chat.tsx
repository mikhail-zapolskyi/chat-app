import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { io, Socket } from "socket.io-client";
import { v4 as uuid } from "uuid";
import {
	LogoutBtn,
	ContactBoard,
	SearchContacts,
	SearchContactResult,
	Error,
	ContactTab,
	UserTab,
} from "../components";
import { addContact } from "../redux/authSlice";

const Chat = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);
	const [socket, setSocket] = useState<Socket | null>(null);
	const [inputMessage, setInputMessage] = useState("");
	const [chatMessages, setChatMessages] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [searchResult, setSearchResult] = useState({ id: "", email: "" });
	const [usersOnline, setUsersOnline] = useState([]);
	const [room, setRoom] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		const newSocket = io("http://localhost:4000", {
			auth: { id: user?.id },
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

		socket.on("userConnected", (onlineStatus: []) => {
			setUsersOnline(onlineStatus);
		});

		socket.on("userDisconnected", (onlineStatus: []) => {
			setUsersOnline(onlineStatus);
		});

		socket.on("message", (data) => {
			const { message, userId } = data;
			console.log(message);
			setChatMessages((chatMessages) => [
				...chatMessages,
				{ message, user: userId },
			]);
		});

		return () => {
			socket.off("userConnected");
			socket.off("message");
			socket.off("userDisconnected");
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

	useEffect(() => {
		const getConversation = async () => {
			const response = await fetch(
				"http://localhost:4000/api/conversations",
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ roomId: room }),
				}
			);

			const conversation = await response.json();
			if (conversation) {
				console.log(conversation.messages);
				setChatMessages(conversation.messages);
			}
		};

		return () => {
			getConversation();
		};
	}, [room]);

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
			room,
			userId: user.id,
		});
		setInputMessage("");
	};

	const generate_id = () => {
		return `id_${(Math.random() * 10000000000).toFixed(0)}`;
	};

	const find_contact = async () => {
		fetch("http://localhost:4000/api/find-contact", {
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
		const roomId: string = uuid();
		dispatch(addContact({ id: searchResult.id, room: roomId }));
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
							user.contacts.map((contact) => {
								return (
									<ContactTab
										key={contact.id}
										contact={contact}
										onclick={() => {
											setRoom(contact.room);
											setChatMessages([]);
										}}
										online={usersOnline}
									/>
								);
							})}
					</div>
					<LogoutBtn />
				</ContactBoard>
			</div>
			{room && (
				<div className="chat-messageBoard">
					<UserTab contacts={user.contacts} room={room} />
					<ul className="chat-messageBoard__messages">
						{chatMessages.map((msg) => {
							return (
								<li
									className={
										user?.id === msg.user
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
