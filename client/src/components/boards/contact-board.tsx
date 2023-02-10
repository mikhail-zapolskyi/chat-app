import styles from "./contact-board.module.css";

const ContactBoard = ({ children }) => {
	return <div className={styles.contactBoard}>{children}</div>;
};

export default ContactBoard;
