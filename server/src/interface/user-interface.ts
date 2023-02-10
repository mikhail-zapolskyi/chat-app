interface IUser {
	name?: string;
	email: string;
	avatar?: string;
	password: string;
	contacts?: [
		{
			name: string;
			email: string;
			id: string;
		}
	];
}

export default IUser;
