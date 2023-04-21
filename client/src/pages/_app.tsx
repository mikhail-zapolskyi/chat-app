import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { getUser } from "../redux/authSlice";
import { getError } from "../redux/errorSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Spinner } from "../components";

import "../styles/global.css";
import "../styles/container.css";
import "../styles/chat/chat.css";

const Auth = ({ children }) => {
	const dispatch = useAppDispatch();
	const { loading } = useAppSelector((state) => state.auth);
	const { error } = useAppSelector((state) => state.errors);

	// Clear error message
	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(getError(null));
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, [dispatch, error]);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	// Show spinner while loading
	if (loading) return <Spinner />;

	return children;
};

export default function MyApp({
	Component,
	pageProps: { pageProps },
}: AppProps) {
	return (
		<Provider store={store}>
			<Auth>
				<Component {...pageProps} />
			</Auth>
		</Provider>
	);
}
