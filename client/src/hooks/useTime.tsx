import { useState } from "react";

const useTime = (dateString: string): [string, string] => {
	const [time, setTime] = useState<string>(() => {
		const date = new Date(dateString);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
		const formattedMinutes =
			minutes < 10 ? `0${minutes}` : minutes.toString();
		return `${formattedHours}:${formattedMinutes}`;
	});

	const [date, setDate] = useState<string>(() => {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${year}/${month}/${day}`;
	});

	return [time, date];
};

export default useTime;
