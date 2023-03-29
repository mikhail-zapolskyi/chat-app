import React from "react";
import styles from "./Message.module.css";
import { BsThreeDots } from "react-icons/bs";

interface Props {
	msg: string;
	name?: string;
	email?: string;
	isContact: boolean;
	date: string;
}

const Message: React.FC<Props> = ({ msg, name, email, isContact, date }) => {
	console.log(isContact);
	return (
		<li className={styles.wrapper}>
			<div className={styles.container}>
				<img
					src="https://www.w3schools.com/howto/img_avatar.png"
					alt="Avatar"
					className={styles.avatar}
				/>
				<div className={styles.content}>
					<div className={styles.userAndTime}>
						<p className={styles.userName}>Name</p>
						<p className={styles.time}>{getTime(date)}</p>
					</div>
					<p className={styles.text}>{msg}</p>
				</div>
			</div>
			<BsThreeDots className={styles.settings} />
		</li>
	);
};

const getTime = (dateString: string): string => {
	const date = new Date(dateString);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
	return `${formattedHours}:${formattedMinutes}`;
};

export default Message;
