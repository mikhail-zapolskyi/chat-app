import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import io from "socket.io-client";

const Chat = () => {
	const { user } = useAppSelector((state) => state.auth);
	const [message, setMessage] = useState("");
	const [chatMessage, setChatMessage] = useState([]);
	const socket = io("http://localhost:4000");

	useEffect(() => {
		socket.on("message", (data) => {
			const { message, user } = data;
			setChatMessage([...chatMessage, { user, message }]);
		});
	}, [socket]);

	const handleMessageState = (e) => {
		e.preventDefault();
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		socket.emit("message", message, user.id);

		socket.on("disconnect", () => {
			console.log("disconnected"); // undefined
		});

		setMessage("");
	};

	const generate_id = () => {
		return `id_${(Math.random() * 10000000000).toFixed(0)}`;
	};

	return (
		<div className="chat">
			<div className="chat-contacts">
				<p>{user && user.email}</p>
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
					value={message}
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
