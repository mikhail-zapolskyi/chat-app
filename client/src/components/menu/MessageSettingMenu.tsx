import React from "react";
import styles from "./MessageSettingMenu.module.css";

interface IMessageSettingMenu {
	onClick: () => void;
}

const MessageSettingMenu: React.FC<IMessageSettingMenu> = ({ onClick }) => {
	return (
		<div className={styles.wrapper} onClick={onClick}>
			<p className={styles.button}>delete</p>
		</div>
	);
};

export default MessageSettingMenu;
