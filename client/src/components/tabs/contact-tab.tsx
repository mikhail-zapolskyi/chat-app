import styles from "./contact-tab.module.css";
import { RiRadioButtonLine } from "react-icons/ri";

const ContactTab = ({ contact, onclick }) => {
	return (
		<p onClick={onclick} className={styles.contactTab}>
			{contact.email}
			<RiRadioButtonLine
				className={
					contact.onlineStatus
						? styles.contactTab__statusOnline
						: styles.contactTab__statusOffline
				}
			/>
		</p>
	);
};

export default ContactTab;
