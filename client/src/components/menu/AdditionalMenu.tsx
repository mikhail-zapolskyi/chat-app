import React from "react";
import styles from "./AdditioanlMenu.module.css";

interface IAdditioanlMenu {
	children: React.ReactNode;
}

const MessageSettingMenu: React.FC<IAdditioanlMenu> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default MessageSettingMenu;
