import React from "react";
import styles from "./SuccessMessage.module.css";

const SuccessMessage: React.FC<{ message: React.ReactNode }> = ({
	message,
}) => {
	return <div className={styles.error}>{message}</div>;
};
export default SuccessMessage;
