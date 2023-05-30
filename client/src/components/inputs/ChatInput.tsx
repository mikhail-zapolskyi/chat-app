import React, { useRef } from "react";

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
		<>
			<label htmlFor="chat" className="sr-only">
				Your message
			</label>
			<div className="flex items-center px-3 py-2 rounded-lg bg-chat-active dark:bg-gray-700">
				<textarea
					ref={textareaRef}
					name="chat_msg"
					value={input}
					onChange={onChange}
					onInput={handleInput}
					onKeyDown={onKeyDown}
					className="block mx-4 p-2.5 w-full text-xl text-primary bg-white rounded-lg border border-gray-300 focus:ring-chat focus:border-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Your message..."
				></textarea>
				<button
					onClick={onClick}
					className="inline-flex justify-center p-2 text-primary rounded-full cursor-pointer hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-600"
				>
					<svg
						aria-hidden="true"
						className="w-8 h-8 rotate-90"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
					</svg>
					<span className="sr-only">Send message</span>
				</button>
			</div>
		</>
	);
};

export default ChatInput;
