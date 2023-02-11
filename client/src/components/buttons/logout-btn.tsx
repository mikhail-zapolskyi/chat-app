import styles from "./logout-btn.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUser } from "../../redux/authSlice";

const LogoutBtn = () => {
	const dispatch = useAppDispatch();

	const logout = (e) => {
		e.preventDefault();
		dispatch(logoutUser());
	};

	return (
		<button className={`${styles.logout_btn} btn`} onClick={logout}>
			Logout
		</button>
	);
};

export default LogoutBtn;
