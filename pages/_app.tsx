import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@styles/themes";
import { Fonts } from "fonts";
import { Provider } from "react-redux";
import { store } from "state/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={customTheme}>
			<Provider store={store}>
				<Fonts />
				<Component {...pageProps} />
			</Provider>
		</ChakraProvider>
	);
};

export default MyApp;
