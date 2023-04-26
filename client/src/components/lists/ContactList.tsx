import React from "react";
import styles from "./ContactList.module.css";

interface IContactListProps {
	children: React.ReactNode[] | React.ReactNode;
}

const ContactList: React.FC<IContactListProps> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default ContactList;
