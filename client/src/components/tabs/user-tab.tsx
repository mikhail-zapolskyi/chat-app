import React from "react";

interface IContact {
	id: string;
	name?: string;
	roomId?: string;
	email: string;
	avatar?: string;
}

interface IContactProps {
	contacts?: IContact[];
	roomId: string;
}

const UserTab: React.FC<IContactProps> = ({ contacts, roomId }) => {
	const targetContact = (): IContact => {
		const [contact] = contacts.filter(
			(contact) => contact.roomId === roomId
		);
		return contact;
	};

	return (
		<div>
			<p>
				{targetContact().name || targetContact().email || "Unknown"}
			</p>
		</div>
	);
};

export default UserTab;
