import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { registerUser } from "../redux/authSlice";
import { Message, Error, Button } from "../components";
import styles from "../styles/auth/auth.module.css";

const Register = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [auth, setAuth] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const clear_error_message = () => {
		setTimeout(() => {
			setError("");
			setMessage("");
		}, 3000);
	};

	const handle_auth_state = (e) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(registerUser(auth)).then((res) => {
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

	return (
		<>
			<div className="wrapper-full-screen-dark">
				<form onSubmit={handleSubmit} className={styles.auth}>
					<h1 className={styles.auth__title}>
						Register to pMessanger
					</h1>
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
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						value={auth.confirmPassword}
						onChange={handle_auth_state}
						className={styles.auth__input}
					/>
					<Button text="Register" />
					<p className={styles.auth__text}>
						Already have an account? Please{" "}
						<a href="/login" className={styles.auth__link}>
							login
						</a>
					</p>
				</form>
			</div>
			{message && <Message message={message}></Message>}
			{error && <Error message={error}></Error>}
		</>
	);
};

export default Register;
