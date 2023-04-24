import styles from "./SearchContactResultCard.module.css";
import { BsJournalPlus } from "react-icons/bs";

interface ISearchContactResultCardProps {
	contact: {
		id: string;
		name?: string;
		email: string;
		avatar?: string;
	};
	addContact: () => void;
}

const SearchContactResultCard: React.FC<ISearchContactResultCardProps> = ({
	contact,
	addContact,
}) => {
	const { id, name, email, avatar } = contact;

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.avatarContainer}>
					<img
						src={
							avatar
								? avatar
								: "https://www.w3schools.com/howto/img_avatar.png"
						}
						alt="Avatar"
						className={styles.avatar}
					/>
				</div>
				<div className={styles.info}>
					<p className={styles.id}>ID: {id}</p>
					<p className={styles.name}>Name: {name || email}</p>
				</div>
				<div className={styles.actions}>
					<BsJournalPlus
						className={styles.addContact}
						onClick={addContact}
					/>
				</div>
			</div>
		</>
	);
};

export default SearchContactResultCard;
