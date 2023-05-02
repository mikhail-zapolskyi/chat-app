import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { registerUser } from "../redux/authSlice";
import { ErrorMessage, LoginButton, Title, BasicLink } from "../components";
import styles from "../styles/auth/auth.module.css";
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
					<LoginButton text="Register" />
					<p className={styles.auth__text}>
						Already have an account?
						<BasicLink href="/login" text="Login" />
					</p>
				</form>
			</div>
			<ErrorMessage />
		</>
	);
};

export default Register;
