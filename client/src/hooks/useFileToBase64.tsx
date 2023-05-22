import React, { ChangeEvent, useState } from "react";

type Base64String = string | null;

const useFileToBasse64 = (): [
	Base64String,
	(e: ChangeEvent<HTMLInputElement>) => void
] => {
	const [base64string, setBase64String] = useState<Base64String>(null);

	const handleFileToString = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			setBase64String(null);
			return;
		}

		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			const base64 = reader.result as string;
			setBase64String(base64);
		};
		reader.readAsDataURL(file);
	};

	return [base64string, handleFileToString];
};

export default useFileToBasse64;
