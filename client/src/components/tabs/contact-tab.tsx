import styles from "./contact-tab.module.css";
import { RiRadioButtonLine } from "react-icons/ri";

const ContactTab = ({ online, contact, onclick }) => {
	const isUserOnline = (): boolean => {
		// FILTER STATUS BY CONTACT ID
		const [status] = online.filter(
			(status) => status.userId === contact.id
		);
		// IF STATUS EXIST RETURN ONLINE STATUS
		if (status) {
			return status.online;
		}
	};

	return (
		<p key={contact.id} onClick={onclick} className={styles.contactTab}>
			{contact.email}
			<RiRadioButtonLine
				className={
					isUserOnline()
						? styles.contactTab__statusOnline
						: styles.contactTab__statusOffline
				}
			/>
		</p>
	);
};

export default ContactTab;
