import styles from "./search-contacts.module.css";

const SearchContacts = ({ onchange, value, onclick }) => {
	return (
		<div className={styles.search}>
			<input
				type="text"
				name="searchInput"
				value={value}
				onChange={onchange}
				className={styles.searchInput}
				placeholder="Search Contact By Email"
			/>
			<button className={`btn ${styles.searchBtn}`} onClick={onclick}>
				Search
			</button>
		</div>
	);
};

export default SearchContacts;
