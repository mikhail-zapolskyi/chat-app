import type { AppProps } from "next/app";
import "../styles/common/reset.css";
import "../styles/forms/auth.css";
import "../styles/common/container.css";
import "../styles/chat/chat.css";
import "../styles/button/button.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
