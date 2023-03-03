interface IContactTarget {
	id: string;
	name?: string;
	room: string;
	email: string;
}

const UserTab = ({ contacts, room }) => {
	const targetContact = (): IContactTarget => {
		const [contact] = contacts.filter((contact) => contact.room === room);
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
