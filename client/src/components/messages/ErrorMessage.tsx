import styles from "./ErrorMessage.module.css";

const Error = ({ message }) => {
	return (
		<div className={styles.message}>
			<p>{message}</p>
		</div>
	);
};

export default Error;
