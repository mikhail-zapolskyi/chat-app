import React from "react";
import styles from "./ContactTab.module.css";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useTime } from "../../hooks";

interface IContactTab {
	contact: {
		name?: string;
		email: string;
		onlineStatus: boolean;
		avatar?: string;
		lastTimeOnline?: string;
	};
	onClick: () => void;
	active: boolean;
}

const ContactTab: React.FC<IContactTab> = ({ active, contact, onClick }) => {
	const [time, date] = useTime(contact?.lastTimeOnline);
	const { avatar, name, email, onlineStatus } = contact;

	return (
		<div
			className={active ? styles.wrapper__active : styles.wrapper}
			onClick={onClick}
		>
			<div className={styles.avatarContainer}>
				<GrStatusGoodSmall
					className={
						onlineStatus
							? styles.onlineStatusIcon__online
							: styles.onlineStatusIcon__offline
					}
				/>
				<img
					src={
						avatar
							? avatar
							: "https://www.w3schools.com/howto/img_avatar.png"
					}
					alt="Avatar"
					className={styles.avatar}
				/>
			</div>
			<div className={styles.info}>
				<p>{name || email}</p>
				<p>{onlineStatus ? "Active" : "Offline"}</p>
				<p>
					Last time online: {date} - {time}
				</p>
			</div>
		</div>
	);
};

export default ContactTab;
