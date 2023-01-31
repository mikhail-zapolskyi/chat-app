import styles from "./message.module.css";

const Message = ({ message }) => {
	return (
		<div className={styles.message}>
			<p>{message}</p>
		</div>
	);
};

export default Message;
