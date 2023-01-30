import React, { useState } from "react";

const Register = () => {
	const [auth, setAuth] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Perform authentication here
	};

	const handle_auth_state = (e) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
		console.log();
	};

	return (
		<div className="container-fs">
			<form onSubmit={handleSubmit} className="auth-form">
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={auth.username}
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
					value={auth.password}
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
