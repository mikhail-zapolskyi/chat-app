import React from "react";
import { IUser } from "@/interfaces/IUser";

interface IUserCardProps {
	user: IUser | null;
}

const UserCard: React.FC<IUserCardProps> = ({ user }) => {
	const baseAvatar = "https://www.w3schools.com/howto/img_avatar.png";
	console.log(user?.onlineStatus);
	return (
		user && (
			<div className="flex flex-col items-center justify-center w-full p-3">
				<img
					className="w-40 h-40 rounded"
					src={user.avatar || baseAvatar}
					alt="Large avatar"
				/>
				<div className="p-1 text-xl">
					<h3>{user.name || "User"}</h3>
				</div>
			</div>
		)
	);
};

export default UserCard;
