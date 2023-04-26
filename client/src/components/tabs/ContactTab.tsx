import React from "react";
import styles from "./ContactTab.module.css";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useTime } from "../../hooks";
import { removeContact } from "../../redux/contactsSlice";
import { useAppDispatch } from "../../redux/hooks";
import { IContact } from "@/interfaces/IContact";

interface IContactTab {
	userId: string;
	contact: IContact;
	onClick: () => void;
	active: boolean;
}

const ContactTab: React.FC<IContactTab> = ({
	userId,
	active,
	contact,
	onClick,
}) => {
	const dispatch = useAppDispatch();
	const { contactId, avatar, name, email, onlineStatus, lastTimeOnline } =
		contact;
	const [time, date] = useTime(lastTimeOnline);

	const remove_contact = () => {
		dispatch(
			removeContact({
				userId,
				contactId,
			})
		);
	};

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
				<p onClick={remove_contact}>remove</p>
			</div>
		</div>
	);
};

export default ContactTab;
