import styles from "./ContactBoard.module.css";

const ContactBoard: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className={styles.contactBoard}>{children}</div>;
};

export default ContactBoard;
