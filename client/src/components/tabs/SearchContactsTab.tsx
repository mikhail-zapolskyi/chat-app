import styles from "./SearchContactsTab.module.css";
import { BsSearch } from "react-icons/bs";

const SearchContactsTab = ({ onchange, value, onclick }) => {
	return (
		<div className={styles.wrapper}>
			<input
				type="text"
				name="searchInput"
				value={value}
				onChange={onchange}
				className={styles.input}
				placeholder="Search Contact By Email"
			/>
			<BsSearch className={styles.button} onClick={onclick} />
		</div>
	);
};

export default SearchContactsTab;
