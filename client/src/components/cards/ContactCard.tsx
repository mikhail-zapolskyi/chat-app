import React, { useState, useEffect } from "react";
import { useTime } from "../../hooks";
import { IContact } from "@/interfaces/IContact";

interface IContactTab {
	contact: IContact;
	onClick: () => void;
	removeContactOnClick: () => void;
	active: boolean;
}

const ContactCard: React.FC<IContactTab> = ({
	active,
	contact,
	onClick,
	removeContactOnClick,
}) => {
	const { avatar, name, email, onlineStatus, lastTimeOnline } = contact;
	const [time, date] = useTime(lastTimeOnline);
	const [dropMenu, setDropMenu] = useState(false);

	return (
		<li
			className={`py-3 sm:py-4 cursor-pointer ${
				active ? "bg-chat-active" : "bg-chat"
			} p-2 flex flex-col justify-between items-center`}
		>
			<div
				className="inline-flex items-center space-x-4 w-full"
				onClick={onClick}
			>
				<div className="relative">
					<img
						className={`w-16 h-16 p-1 rounded-full ring-2 ${
							onlineStatus
								? "ring-green-400"
								: "ring-orange-400"
						}`}
						src={
							avatar
								? avatar
								: "https://www.w3schools.com/howto/img_avatar.png"
						}
						alt="avatar"
					/>
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-lg font-medium text-gray-900 truncate dark:text-white">
						{name || email}
					</p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						{!onlineStatus && lastTimeOnline
							? `Last time online: ${date} ${time}`
							: ""}
					</p>
				</div>
				<div
					className="inline-flex items-center text-base font-semibold text-gray-900 z-50"
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
				<div className="bg-white divide-y divide-gray-100 rounded-lg shadow w-full  mt-6">
					<ul
						className="py-2 text-lg text-gray-700"
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
		</li>
	);
};

export default ContactCard;
