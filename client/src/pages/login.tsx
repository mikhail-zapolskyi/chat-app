import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { loginUser } from "../redux/authSlice";
import { getError } from "../redux/errorSlice";
import { Button, ErrorMessage, Title, BasicLink } from "../components";
import styles from "../styles/auth/auth.module.css";

const Login = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [auth, setAuth] = useState({ email: "", password: "" });

	const handle_auth_state = (e) => {
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
				<form onSubmit={handleSubmit} className={styles.auth}>
					<Title message="Login to pMessanger" />
					<input
						type="text"
						name="email"
						placeholder="Email"
						value={auth.email}
						onChange={handle_auth_state}
						className={styles.auth__input}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={auth.password}
						onChange={handle_auth_state}
						className={styles.auth__input}
					/>
					<Button text="Login" />
					<p className={styles.auth__text}>
						Don't have an account?
						<BasicLink href="/register" text="Register" />
					</p>
				</form>
			</div>
			<ErrorMessage />
		</>
	);
};

export default Login;
