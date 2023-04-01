import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { registerUser } from "../redux/authSlice";
import { Message, ErrorMessage, Button, Title, BasicLink } from "../components";
import styles from "../styles/auth/auth.module.css";

const Register = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [auth, setAuth] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");

	const clear_error_message = () => {
		setTimeout(() => {
			setError("");
		}, 3000);
	};

	const handle_auth_state = (e) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(registerUser(auth)).then((res) => {
			const { errors } = res.payload;

			if (errors) {
				setError(errors.message);
			} else {
				router.push("/chat");
			}

			clear_error_message();
		});
	};

	return (
		<>
			<div className="wrapper-full-screen-dark">
				<form onSubmit={handleSubmit} className={styles.auth}>
					<Title message="Register to pMessanger" />
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
						Already have an account?
						<BasicLink href="/login" text="Login" />
					</p>
				</form>
			</div>
			{error && <ErrorMessage message={error} />}
		</>
	);
};

export default Register;
