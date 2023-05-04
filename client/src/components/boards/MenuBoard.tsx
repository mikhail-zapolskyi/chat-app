import React from "react";
import styles from "./MenuBoard.module.css";
import {
	LogoutButton,
	AddContactButton,
	ContactsButton,
	UserSettingsButton,
} from "..";

const MenuBoard = () => {
	return (
		<div className={styles.menuBoard}>
			<div className={styles.header}>
				<div className={styles.item}>
					<ContactsButton />
				</div>
				<div className={styles.item}>
					<AddContactButton />
				</div>
				<div className={styles.item}>
					<UserSettingsButton />
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.item}>
					<LogoutButton />
				</div>
			</div>
		</div>
	);
};

export default MenuBoard;
