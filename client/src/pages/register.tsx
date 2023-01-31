import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { registerUser } from "../redux/authSlice";

const Register = () => {
	const dispatch = useAppDispatch();
	const [auth, setAuth] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(registerUser(auth));
	};

	const handle_auth_state = (e) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
	};

	return (
		<div className="container-fs">
			<form onSubmit={handleSubmit} className="auth-form">
				<input
					type="text"
					name="email"
					placeholder="Email"
					value={auth.email}
					onChange={handle_auth_state}
					className="auth-form__input auth-form__username"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={auth.password}
					onChange={handle_auth_state}
					className="auth-form__input auth-form__password"
				/>
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={auth.confirmPassword}
					onChange={handle_auth_state}
					className="auth-form__input auth-form__password"
				/>
				<button type="submit" className="auth-form__btn btn">
					Register
				</button>
				<p>
					Already have an account?
					<a href="/login">Login</a>
				</p>
			</form>
		</div>
	);
};

export default Register;
