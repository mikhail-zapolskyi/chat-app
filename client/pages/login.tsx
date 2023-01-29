import React, { useState } from "react";

const LoginPage = () => {
	const [auth, setAuth] = useState({ username: "", password: "" });

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Perform authentication here
	};

	const handle_auth_state = (e) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
	};

	return (
		<div className="container-fs">
			<form onSubmit={handleSubmit} className="login-form">
				<input
					type="text"
					placeholder="Username"
					value={auth.username}
					onChange={handle_auth_state}
					className="login-form__input login-form__username"
				/>
				<input
					type="password"
					placeholder="Password"
					value={auth.password}
					onChange={handle_auth_state}
					className="login-form__input login-form__password"
				/>
				<button type="submit" className="login-form__btn btn">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
