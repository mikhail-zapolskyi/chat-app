import styles from "./logout-btn.module.css";

const LogoutBtn = ({ onclick }) => {
	return (
		<button className={`${styles.logout_btn} btn`} onClick={onclick}>
			Logout
		</button>
	);
};

export default LogoutBtn;
