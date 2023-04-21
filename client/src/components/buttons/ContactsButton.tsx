import styles from "./AddContactButton.module.css";
import { ImUsers } from "react-icons/im";
import { useAppDispatch } from "../../redux/hooks";
import { changeMenu } from "../../redux/menuTabSlice";

const ContactsButton = () => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(changeMenu("contacts"));
	};

	return <ImUsers onClick={handleLogout} className={styles.button} />;
};

export default ContactsButton;
