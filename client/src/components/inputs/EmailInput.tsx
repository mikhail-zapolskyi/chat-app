import React from "react";

interface IEmailInput {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<IEmailInput> = ({ value, onChange }) => {
	return (
		<div className="relative mb-6 w-full">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					aria-hidden="true"
					className="w-8 h-8 text-gray-500 dark:text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
				</svg>
			</div>
			<input
				type="text"
				name="email"
				placeholder="email@email.com"
				value={value}
				onChange={onChange}
				className="bg-primary border border-gray-300 text-white text-2xl rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-14 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
			/>
		</div>
	);
};

export default EmailInput;
