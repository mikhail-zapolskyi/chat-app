import React from "react";
import styles from "./SuccessMessage.module.css";

const SuccessMessage = ({ message }) => {
	return <div className={styles.error}>{message}</div>;
};
export default SuccessMessage;
