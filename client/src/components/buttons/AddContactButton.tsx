import styles from "./AddContactButton.module.css";
import { ImUserPlus } from "react-icons/im";
import { useAppDispatch } from "../../redux/hooks";
import { changeMenu } from "../../redux/menuTabSlice";

const AddContact = () => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(changeMenu("addContact"));
	};

	return <ImUserPlus onClick={handleLogout} className={styles.button} />;
};

export default AddContact;
