import React from "react";
import styles from "./ContactTab.module.css";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useTime } from "../../hooks";
import { IContact } from "@/interfaces/IContact";

interface IContactTab {
	contact: IContact;
	onClick: () => void;
	removeContactOnClick: () => void;
	active: boolean;
}

const ContactTab: React.FC<IContactTab> = ({
	active,
	contact,
	onClick,
	removeContactOnClick,
}) => {
	const { avatar, name, email, onlineStatus, lastTimeOnline } = contact;
	const [time, date] = useTime(lastTimeOnline);

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
					Last time online: {date} {time}
				</p>
				<p onClick={removeContactOnClick}>remove</p>
			</div>
		</div>
	);
};

export default ContactTab;
