import React from "react";
import styles from "./UserTab.module.css";
import { GrStatusGoodSmall } from "react-icons/gr";
import { IContact } from "@/interfaces/IContact";

interface IContactProps {
	contacts?: IContact[] | undefined;
	roomId: string;
}

const UserTab: React.FC<IContactProps> = ({ contacts, roomId }) => {
	const targetContact = (): IContact => {
		if (!contacts) return {} as IContact;
		const [contact] = contacts.filter(
			(contact) => contact.roomId === roomId
		);
		return contact;
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>
				<div className={styles.avatarContainer}>
					<GrStatusGoodSmall
						className={
							targetContact()?.onlineStatus
								? styles.onlineStatusIcon__online
								: styles.onlineStatusIcon__offline
						}
					/>
					<img
						src={
							targetContact()?.avatar
								? targetContact().avatar
								: "https://www.w3schools.com/howto/img_avatar.png"
						}
						alt="Avatar"
						className={styles.avatar}
					/>
				</div>
				<div>
					<p>
						{targetContact()?.name || targetContact()?.email}
					</p>
					<p>
						{targetContact()?.onlineStatus
							? "Active"
							: "Offline"}
					</p>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default UserTab;
