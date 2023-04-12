import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { getUser } from "../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import "../styles/global.css";
import "../styles/container.css";
import "../styles/chat/chat.css";

const Auth = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	return children;
};

export default function MyApp({
	Component,
	pageProps: { user, pageProps },
}: AppProps) {
	return (
		<Provider store={store}>
			<Auth>
				<Component {...pageProps} />
			</Auth>
		</Provider>
	);
}
