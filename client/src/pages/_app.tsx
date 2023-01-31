import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Children, useEffect } from "react";
import { fetchUser } from "../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import "../styles/common/reset.css";
import "../styles/forms/auth.css";
import "../styles/common/container.css";
import "../styles/chat/chat.css";
import "../styles/button/button.css";

const Auth = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return children;
};

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Auth>
				<Component {...pageProps} />
			</Auth>
		</Provider>
	);
}
