import { Box } from "@chakra-ui/react";
import { IMainLayout } from "@interfaces/page";
import { Footer } from "./Footer";
import { Header } from "./Header";

const MainLayout = ({ children }: IMainLayout) => {
	return (
		<Box>
			<Header />
			{children}
			<Footer />
		</Box>
	);
};

export { MainLayout };
