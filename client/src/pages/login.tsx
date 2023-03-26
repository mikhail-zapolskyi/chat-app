import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { loginUser } from "../redux/authSlice";
import { Message, Button, Error } from "../components";
import styles from "./login.module.css";

const Login = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [auth, setAuth] = useState({ email: "", password: "" });
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const handle_auth_state = (e) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(loginUser(auth)).then((res) => {
			const { errors, message } = res.payload;

			if (errors) {
				setError(errors.message);
			} else {
				setMessage(message);
				setTimeout(() => {
					router.push("/chat");
				}, 500);
			}

			clear_error_message();
		});
	};

	const clear_error_message = () => {
		setTimeout(() => {
			setError("");
			setMessage("");
		}, 3000);
	};

	return (
		<>
			<div className="wrapper-full-screen-dark">
				<form onSubmit={handleSubmit} className={styles.auth}>
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
						Don't have an account. Please{" "}
						<a href="/register" className={styles.auth__link}>
							register
						</a>
					</p>
				</form>
			</div>
			{message && <Message message={message}></Message>}
			{error && <Error message={error}></Error>}
		</>
	);
};

export default Login;
