import React from "react";
import styles from "./ChatMessage.module.css";
import { BsThreeDots } from "react-icons/bs";
import { useTime } from "../../hooks";
import { useAppDispatch } from "../../redux/hooks";
import MessageSettingMenu from "../menu/MessageSettingMenu";
import { deleteMessage } from "../../redux/messagesSlice";

interface IChatMessage {
	id: string;
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

const ChatMessage: React.FC<IChatMessage> = ({
	id,
	msg,
	isContact,
	date,
	contact,
}) => {
	const dispatch = useAppDispatch();
	const [time] = useTime(date);
	const [messageSettingMenuState, setMessageSettingMenuState] =
		React.useState(false);

	const handleDeleteMessage = () => {
		dispatch(deleteMessage(id));
		setMessageSettingMenuState(false);
	};

	return (
		<>
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
				<BsThreeDots
					className={styles.settings}
					onClick={() =>
						setMessageSettingMenuState(
							!messageSettingMenuState
						)
					}
				/>
			</li>
			<li>
				{messageSettingMenuState && (
					<MessageSettingMenu onClick={handleDeleteMessage} />
				)}
			</li>
		</>
	);
};

export default ChatMessage;
