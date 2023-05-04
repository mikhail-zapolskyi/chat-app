import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { loginUser } from "../redux/authSlice";
import { getError } from "../redux/errorSlice";
import {
	LoginButton,
	ErrorMessage,
	Title,
	BasicLink,
	PasswordInput,
	EmailInput,
	IconLink,
} from "../components";

const Login = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [auth, setAuth] = useState({ email: "", password: "" });

	const handle_auth_state = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(loginUser(auth)).then((res) => {
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
					<Title message="Login to pMessanger" />
					<EmailInput
						value={auth.email}
						onChange={handle_auth_state}
					/>
					<PasswordInput
						name="password"
						value={auth.password}
						onChange={handle_auth_state}
					/>
					<LoginButton text="Login" />
					<IconLink
						name="Register"
						href="/register"
						text="Don't have an account?"
					/>
				</form>
			</div>
			<ErrorMessage />
		</>
	);
};

export default Login;
