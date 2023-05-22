type Base64String = string | null;

export interface IUser {
	id: string;
	name?: string;
	email: string;
	avatar?: Base64String;
	password: string;
	contactList?: string[];
	onlineStatus: boolean;
	lastTimeOnline?: Date;
}
