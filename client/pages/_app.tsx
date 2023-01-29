import type { AppProps } from "next/app";
import "../styles/forms/login.css";
import "../styles/common/container.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
