import styles from "./search-contact-result.module.css";
import { BsJournalPlus } from "react-icons/bs";
import { GrClear } from "react-icons/gr";

const SearchContactResult = ({ contact, clearContact, addContact }) => {
	return (
		<div className={styles.searchContactResult}>
			<p>{contact.email}</p>
			<p>{contact.id}</p>
			<BsJournalPlus
				className={styles.addContact}
				onClick={addContact}
			/>
			<GrClear
				className={styles.clearContact}
				onClick={clearContact}
			/>
		</div>
	);
};

export default SearchContactResult;
