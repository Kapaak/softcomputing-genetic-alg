import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import GlobalStyle from "../styles/GlobalStyle";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
