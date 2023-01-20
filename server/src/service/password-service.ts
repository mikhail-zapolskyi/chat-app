import bcrypt from "bcryptjs";

class Password {
	static async hash(password: string) {
		const salt = await bcrypt.genSalt(10);
		const hash = bcrypt.hash(password, salt);
		return hash;
	}

	static async verify(password: string, comparePassword: string) {
		return await bcrypt.compare(password, comparePassword);
	}
}

export default Password;
