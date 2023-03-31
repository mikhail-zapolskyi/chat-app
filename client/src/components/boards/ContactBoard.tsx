import styles from "./ContactBoard.module.css";

const ContactBoard = ({ children }) => {
	return <div className={styles.contactBoard}>{children}</div>;
};

export default ContactBoard;
