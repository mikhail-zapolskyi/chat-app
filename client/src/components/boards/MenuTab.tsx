import React from "react";
import styles from "./MenuTab.module.css";
import LogoutButton from "../buttons/LogoutButton";

const MenuTab = () => {
	return (
		<div className={styles.menuTab}>
			<div className={styles.header}>
				<div className={styles.title}>Menu</div>
				<div className={styles.item}>Profile</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.item}>Settings</div>
				<LogoutButton />
			</div>
		</div>
	);
};

export default MenuTab;
