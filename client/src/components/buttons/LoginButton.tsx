import styles from "./LoginButton.module.css";
import React from "react";

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

const LoginButton: React.FC<ButtonProps> = ({ text, onClick }) => (
	<button onClick={onClick} className={styles.button}>
		{text}
	</button>
);

export default LoginButton;
