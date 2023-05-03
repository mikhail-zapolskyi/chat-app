import React, { useRef } from "react";
import { FiSend } from "react-icons/fi";
import styles from "./Chatinput.module.css";

interface IChatInputProps {
	input: string;
	onClick: () => void;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const ChatInput: React.FC<IChatInputProps> = ({
	input,
	onClick,
	onChange,
	onKeyDown,
}) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInput = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	};

	return (
		<div className={styles.wrapper}>
			<textarea
				ref={textareaRef}
				className={styles.textarea}
				name="chat_msg"
				value={input}
				onChange={onChange}
				onInput={handleInput}
				onKeyDown={onKeyDown}
			/>
			<FiSend onClick={onClick} className={styles.sendButton} />
		</div>
	);
};

export default ChatInput;
