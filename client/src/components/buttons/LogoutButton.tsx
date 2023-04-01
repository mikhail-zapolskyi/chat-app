import React from "react";
import styles from "./LogoutButton.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUser } from "../../redux/authSlice";

const LogoutButton = () => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<AiOutlineLogout
			onClick={handleLogout}
			className={styles.logoutButton}
		/>
	);
};

export default LogoutButton;
