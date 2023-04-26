import styles from "./SearchContactsTab.module.css";
import { BsSearch } from "react-icons/bs";

interface ISearchContactsTabProps {
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	onclick: () => void;
}

const SearchContactsTab: React.FC<ISearchContactsTabProps> = ({
	onchange,
	value,
	onclick,
}) => {
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
