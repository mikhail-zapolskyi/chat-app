import styles from "./search-contacts.module.css";

const SearchContacts = ({ onchange, value, onclick }) => {
	return (
		<div className={styles.search}>
			<input
				type="text"
				name="search"
				value={value}
				onChange={onchange}
				className={styles.searchInput}
			/>
			<button className={`btn ${styles.searchBtn}`} onClick={onclick}>
				Search
			</button>
			<p>Result</p>
		</div>
	);
};

export default SearchContacts;
