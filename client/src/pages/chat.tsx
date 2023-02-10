import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useRouter } from "next/router";
import io from "socket.io-client";
import { v4 as uuid } from "uuid";
import { LogoutBtn, ContactBoard } from "../components";
import { logoutUser } from "../redux/authSlice";

const Chat = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);
	const [inputMessage, setInputMessage] = useState("");
	const [chatMessage, setChatMessage] = useState([]);
	const socket = io("http://localhost:4000");

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

	const handleMessageState = (e) => {
		e.preventDefault();
		setInputMessage(e.target.value);
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
					<p>{user && user.email}</p>
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
					name="chat"
					value={inputMessage}
					onChange={handleMessageState}
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
