import React from "react";

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

const LoginButton: React.FC<ButtonProps> = ({ text, onClick }) => (
	<button
		onClick={onClick}
		className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-2xl px-40 py-6 text-center mr-2 mb-2"
	>
		{text}
	</button>
);

export default LoginButton;
