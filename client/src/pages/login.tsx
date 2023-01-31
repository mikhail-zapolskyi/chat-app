import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/authSlice";
import { Message, Error } from "../components";

const Login = () => {
	const [auth, setAuth] = useState({ email: "", password: "" });
	const dispatch = useAppDispatch();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Perform authentication here
		dispatch(loginUser(auth));
	};

	const handle_auth_state = (e) => {
		e.preventDefault();

		setAuth({ ...auth, [e.target.name]: e.target.value });
	};

	return (
		<>
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
					<button type="submit" className="auth-form__btn btn">
						Login
					</button>
					<p>
						Don't have an account.
						<a href="/register">Register</a>
					</p>
				</form>
			</div>
			{/* <Message message="Hello Message"></Message> */}
			<Error message="hello Error"></Error>
		</>
	);
};

export default Login;
