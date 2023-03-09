interface IContactTarget {
	id: string;
	name?: string;
	roomId: string;
	email: string;
}

const UserTab = ({ contacts, roomId }) => {
	const targetContact = (): IContactTarget => {
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
