import React from "react";
import {
	LogoutButton,
	AddContactButton,
	ContactsButton,
	UserSettingsButton,
} from "..";

const MenuBoard = () => {
	return (
		<div
			className={`
			grid grid-cols-4 place-items-center row-start-3 pb-10 pt-10 bg-chat z-10
			md:flex md:flex-col md:pt-10 md:pb-20 md:row-start-auto md:gap-10 border-r border-opacity-10 border-primary md:h-full`}
		>
			<ContactsButton />
			<AddContactButton />
			<UserSettingsButton />
			<LogoutButton />
		</div>
	);
};

export default MenuBoard;
