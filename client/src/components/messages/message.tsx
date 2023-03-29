import React from "react";
import styles from "./Message.module.css";
import { BsThreeDots } from "react-icons/bs";

interface IMessage {
	msg: string;
	isContact: boolean;
	date: string;
	contact?: {
		name?: string;
		email?: string;
		avatar?: string;
	};
}

const Message: React.FC<IMessage> = ({ msg, isContact, date, contact }) => {
	return (
		<li className={styles.wrapper}>
			<div className={styles.container}>
				<img
					src={
						contact?.avatar
							? contact?.avatar
							: "https://www.w3schools.com/howto/img_avatar.png"
					}
					alt="Avatar"
					className={styles.avatar}
				/>
				<div className={styles.content}>
					<div className={styles.userAndTime}>
						<p className={styles.userName}>
							{isContact
								? "Contact"
								: contact?.name || contact?.email}
						</p>
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
