import React from "react";
import styles from "./ContactList.module.css";

interface IContactListProps {
	children: React.ReactNode[] | React.ReactNode;
}

const ContactList: React.FC<IContactListProps> = ({ children }) => {
	return <ul className={styles.wrapper}>{children}</ul>;
};

export default ContactList;
