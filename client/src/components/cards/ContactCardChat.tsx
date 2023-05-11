import React, { useState } from "react";
import { IContact } from "@/interfaces/IContact";

interface IContactProps {
	contact: IContact;
	removeContactOnClick: () => void;
}

const ContactCardChat: React.FC<IContactProps> = ({
	contact,
	removeContactOnClick,
}) => {
	const [dropMenu, setDropMenu] = useState(false);

	return (
		contact && (
			<div className="flex p-3 flex-col">
				<div className="flex space-x-4 items-center w-full">
					<div className="relative">
						<img
							className={`w-16 h-16 p-1 rounded-full ring-2 ${
								contact.onlineStatus
									? "ring-online"
									: "ring-offline"
							}`}
							src={
								contact.avatar
									? contact.avatar
									: "https://www.w3schools.com/howto/img_avatar.png"
							}
							alt="avatar"
						/>
					</div>
					<div className="flex-1 min-w-0">
						<p className="text-lg font-medium text-gray-900 truncate dark:text-white">
							{contact.name || contact.email}
						</p>
						<p className="text-sm text-gray-500 truncate dark:text-gray-400">
							{contact.onlineStatus ? "Active" : "Offline"}
						</p>
					</div>
					<div
						className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white z-50 cursor-pointer"
						onClick={() => setDropMenu(!dropMenu)}
					>
						<svg
							fill="none"
							stroke="currentColor"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							className="w-10 h-10 text-primary hover:text-gray-500"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
							/>
						</svg>
					</div>
				</div>
				{dropMenu && (
					<div className="bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600 mt-6 cursor-pointer">
						<ul
							className="py-2 text-lg text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownMenuIconHorizontalButton"
						>
							<li
								className="text-center"
								onClick={removeContactOnClick}
							>
								Remove User
							</li>
						</ul>
					</div>
				)}
			</div>
		)
	);
};

export default ContactCardChat;
