import { IUser } from "@/interfaces/IUser";
import React, { useState } from "react";
import { TextInput } from "../index";
import { io, Socket } from "socket.io-client";

interface IUserSettingsTabProps {
	user: IUser | null;
	socket: Socket | null;
}

const UserSettingsTab: React.FC<IUserSettingsTabProps> = ({ user, socket }) => {
	const [data, setData] = useState(user!);

	const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		socket?.emit("changeUserInfo", data);
	};

	const handleDeleteAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		socket?.emit("deleteAccount", data);
	};

	return (
		data && (
			<form className="flex flex-col justify-center items-center">
				<TextInput
					name="name"
					value={data.name!}
					onChange={handleValue}
				/>
				<TextInput
					name="email"
					value={data.email!}
					onChange={handleValue}
				/>
				<button
					type="submit"
					className="w-8/12 text-white bg-primary hover:bg-button-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3	"
					onClick={handleSave}
				>
					Save Changes
				</button>
				{/* <button
					className="w-8/12 text-white bg-primary cursor-pointer hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					onClick={handleDeleteAccount}
				>
					Delete Account
				</button> */}
			</form>
		)
	);
};

export default UserSettingsTab;
