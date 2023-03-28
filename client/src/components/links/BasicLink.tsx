import React from "react";
import styles from "./BasicLink.module.css";

interface IBasicLinkProps {
	href: string;
	text: string;
	className?: string;
}

const BasicLink: React.FC<IBasicLinkProps> = ({ href, text, className }) => (
	<a href={href} className={styles.basicLink}>
		{text}
	</a>
);

export default BasicLink;
