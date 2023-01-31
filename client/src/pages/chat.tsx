import { useState } from "react";
import io from "socket.io-client";

const Chat = () => {
	const [message, setMessage] = useState("");
	const socket = io("http://localhost:4000");

	const handleMessageState = (e) => {
		e.preventDefault();

		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		socket.emit("message", message);

		socket.on("disconnect", () => {
			console.log("disconnected"); // undefined
		});

		setMessage("");
	};

	return (
		<div className="chat">
			<div className="chat-contacts"></div>
			<div className="chat-messageBoard">
				<ul className="chat-messageBoard__messages">
					<li className={`chat-messageBoard__user-message`}>
						<h3>Avatar</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Sunt, at.
						</p>
					</li>
					<li className={`chat-messageBoard__contact-message`}>
						<h3>Avatar</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Dolorem earum inventore
							quidem illum dolore?
						</p>
					</li>
					<li className={`chat-messageBoard__user-message`}>
						<h3>Avatar</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Vel incidunt modi nihil
							fuga fugiat, libero iure soluta dolorem
							dolores voluptate? Ab eius autem optio ipsam!
							Facere alias molestias dolor, culpa est
							recusandae soluta, laboriosam laudantium
							corrupti repellat adipisci aut magni.
						</p>
					</li>
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
