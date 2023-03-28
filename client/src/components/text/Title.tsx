import React from "react";
import styles from "./Title.module.css";

interface ITitleProps {
	message: string;
}

const Title: React.FC<ITitleProps> = ({ message }) => (
	<h1 className={styles.title}>{message}</h1>
);

export default Title;
