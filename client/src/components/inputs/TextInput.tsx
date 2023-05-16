import React from "react";

interface ITextInput {
	value: string;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<ITextInput> = ({ value, name, onChange }) => {
	return (
		<div className="flex relative mb-6 w-full justify-center items-center">
			<input
				type="text"
				name={name}
				value={value}
				placeholder={name}
				onChange={onChange}
				className="w-11/12 text-xl text-primary bg-white rounded-lg border border-gray-300 focus:ring-chat focus:border-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
	);
};

export default TextInput;
