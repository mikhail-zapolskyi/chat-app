import React from "react";
import styles from "./UserCard.module.css";
import { BsFillPersonPlusFill } from "react-icons/bs";

interface AvatarProps {
	imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
	const img = "https://www.w3schools.com/howto/img_avatar.png";

	return img ? (
		<img src={img} alt="avatar" className={styles.avatarImage} />
	) : (
		<BsFillPersonPlusFill className={styles.avatarIcon} />
	);
};

interface IUserCardProps {
	user: {
		id: string;
		name: string;
		email: string;
		avatar: string;
	};
}

const UserCard: React.FC<IUserCardProps> = ({ user }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Avatar imageUrl={user?.avatar} />
			</div>
			<div className={styles.infoWrapper}>
				<h3>{user?.name || user?.email}</h3>
			</div>
		</div>
	);
};

export default UserCard;
