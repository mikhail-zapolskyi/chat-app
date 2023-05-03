import styles from "./SearchContactsTab.module.css";
import { BsSearch } from "react-icons/bs";

interface ISearchContactsTabProps {
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	onClick: () => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchContactsTab: React.FC<ISearchContactsTabProps> = ({
	onchange,
	value,
	onClick,
	onKeyDown,
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
				onKeyDown={onKeyDown}
			/>
			<BsSearch className={styles.button} onClick={onClick} />
		</div>
	);
};

export default SearchContactsTab;
