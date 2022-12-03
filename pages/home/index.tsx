import { Box } from "@chakra-ui/react";
import { Cart } from "@components/templates/cart/Cart";
import { ComingSoon } from "@components/templates/home/ComingSoon";
import { ExploreGames } from "@components/templates/home/ExploreGames";
import Faq from "@components/templates/home/Faq";
import { Hero } from "@components/templates/home/Hero";
import { Footer } from "@layouts/Footer";
import { Header } from "@layouts/Header";
import { useAppSelector } from "hooks/useRedux";
import React from "react";

const HomePage = () => {
	const { isCartOpen } = useAppSelector((state) => state.cart);
	return (
		<Box overflow="hidden">
			<Header />
			<Hero />
			<ExploreGames />
			<ComingSoon />
			<Faq />
			<Footer />
			{isCartOpen && <Cart />}
		</Box>
	);
};

export default HomePage;
