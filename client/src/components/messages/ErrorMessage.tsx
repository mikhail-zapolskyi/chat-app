import styles from "./ErrorMessage.module.css";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";

const Error = () => {
	const { error } = useAppSelector((state) => state.errors);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (error) {
			setMessage(error);
		} else {
			setMessage("");
		}
	}, [error]);

	return (
		<>
			{message && (
				<div className={styles.message}>
					<p>{message}</p>
				</div>
			)}
		</>
	);
};

export default Error;
