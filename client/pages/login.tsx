import React, { useState } from "react";

const Login = () => {
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
				<button type="submit" className="auth-form__btn btn">
					Login
				</button>
				<p>
					Don't have an account.
					<a href="/register">Register</a>
				</p>
			</form>
		</div>
	);
};

export default Login;
