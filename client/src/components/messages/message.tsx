import React from "react";
import styles from "./Message.module.css";
import { BsThreeDots } from "react-icons/bs";
import { useTime } from "../../hooks";

interface IMessage {
	msg: string;
	isContact: boolean;
	date: string;
	contact?: {
		id: string;
		name?: string;
		email?: string;
		avatar?: string;
	};
}

const Message: React.FC<IMessage> = ({ msg, isContact, date, contact }) => {
	const [time] = useTime(date);

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
								? contact?.name || contact?.email
								: "Me"}
						</p>
						<p className={styles.time}>{time}</p>
					</div>
					<p className={styles.text}>{msg}</p>
				</div>
			</div>
			<BsThreeDots className={styles.settings} />
		</li>
	);
};

export default Message;
