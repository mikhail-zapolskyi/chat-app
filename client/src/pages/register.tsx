import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { registerUser } from "../redux/authSlice";
import {
	ErrorMessage,
	LoginButton,
	Title,
	BasicLink,
	EmailInput,
	PasswordInput,
	IconLink,
} from "../components";
import { getError } from "../redux/errorSlice";

const Register = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [auth, setAuth] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handle_auth_state = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(registerUser(auth)).then((res) => {
			const { errors } = res.payload;

			if (errors) {
				dispatch(getError(errors.message));
			} else {
				router.push("/chat");
			}
		});
	};

	return (
		<>
			<div className="wrapper-full-screen-dark">
				<form
					onSubmit={handleSubmit}
					className="w-fit p-4 flex flex-col items-center justify-center"
				>
					<Title message="Register to pMessanger" />
					<EmailInput
						value={auth.email}
						onChange={handle_auth_state}
					/>
					<PasswordInput
						name="password"
						value={auth.password}
						onChange={handle_auth_state}
					/>
					<PasswordInput
						name="confirmPassword"
						value={auth.confirmPassword}
						onChange={handle_auth_state}
					/>
					<LoginButton text="Register" />
					<IconLink
						href="/login"
						text="Have an account?"
						name="Login"
					/>
				</form>
			</div>
			<ErrorMessage />
		</>
	);
};

export default Register;
