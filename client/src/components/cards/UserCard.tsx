import React from "react";
import styles from "./UserCard.module.css";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IUser } from "@/interfaces/IUser";

interface AvatarProps {
	imageUrl: string | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
	const img = "https://www.w3schools.com/howto/img_avatar.png";

	return img ? (
		<img
			src={imageUrl || img}
			alt="avatar"
			className={styles.avatarImage}
		/>
	) : (
		<BsFillPersonPlusFill className={styles.avatarIcon} />
	);
};

interface IUserCardProps {
	user: IUser | null;
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
