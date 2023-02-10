import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useRouter } from "next/router";
import io from "socket.io-client";
import { v4 as uuid } from "uuid";
import { LogoutBtn, ContactBoard, SearchContacts } from "../components";
import { logoutUser } from "../redux/authSlice";

const Chat = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);
	const socket = io("http://localhost:4000");

	const [inputMessage, setInputMessage] = useState("");
	const [chatMessage, setChatMessage] = useState([]);
	const [search, setSearch] = useState("");

	// useEffect(() => {
	// 	socket.on("message", (data) => {
	// 		const { message, room, user } = data;
	// 		setChatMessage([...chatMessage, { user, room, message }]);
	// 	});
	// }, [socket]);

	useEffect(() => {
		const checkAuth = setTimeout(() => {
			if (!user) {
				router.push("/login");
			}
		}, 500);

		return () => clearTimeout(checkAuth);
	}, [user]);

	const handleInputs = (e) => {
		e.preventDefault();

		if (e.target.name === "search") {
			setSearch(e.target.value);
		}

		if (e.target.name === "chat_msg") {
			setInputMessage(e.target.value);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const room = uuid();
		console.log(room);
		console.log(inputMessage);

		await fetch("http://localhost:4000/api/chat", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				message: inputMessage,
				room,
				user: user.id,
			}),
		})
			.then(() => {
				setInputMessage("");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const generate_id = () => {
		return `id_${(Math.random() * 10000000000).toFixed(0)}`;
	};

	const logout = (e) => {
		e.preventDefault();
		dispatch(logoutUser());
	};

	return (
		<div className="chat">
			<div className="chat-contacts">
				<ContactBoard>
					<div>
						<p>{user && user.email}</p>
						<SearchContacts
							value={search}
							onchange={handleInputs}
							onclick={() => console.log("search")}
						/>
						<h3>Contacts</h3>
					</div>
					<LogoutBtn onclick={logout}></LogoutBtn>
				</ContactBoard>
			</div>
			<div className="chat-messageBoard">
				<ul className="chat-messageBoard__messages">
					{chatMessage.map((msg) => {
						return (
							<li
								className={
									user.id === msg.user
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
			</div>
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
	);
};

export default Chat;
