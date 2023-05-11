import { IContact } from "@/interfaces/IContact";

const useFindContact = (contacts: IContact[], roomId: string) => {
	if (!contacts) return {} as IContact;
	const [contact] = contacts.filter((contact) => contact.roomId === roomId);
	return contact;
};

export default useFindContact;
