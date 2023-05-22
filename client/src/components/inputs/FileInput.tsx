import React from "react";

interface IFileInput {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<IFileInput> = ({ onChange }) => {
	return (
		<div className="relative mb-6 w-full">
			<input
				className="block w-full text-md text-primary border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
				id="file"
				type="file"
				onChange={onChange}
			/>
		</div>
	);
};

export default FileInput;
