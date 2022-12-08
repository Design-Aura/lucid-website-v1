import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { LucidBtn } from "@components/ui/button/Button";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "state/feature/cart/cartSlice";
import { Bare, BottomUp, CloserToGod, Game, KnowItAll } from "./animation";
import ExploreList from "./animation/ExploreList";

export interface ExploreGamesProps {
	id: number;
	img: string;
	title: string;
	description: string;
	cardOne: string;
	cardTwo: string;
	cardThree?: string;
	price: number;
	color: string;
	content: string;
}

const gameData: ExploreGamesProps[] = [
	{
		id: 1,
		img: "/assets/icons/bottom-up.svg",
		title: "Bottoms Up",
		description: "Can you handle your liquor?",
		cardOne: "/assets/images/bottom-up-card-one.svg",
		cardTwo: "/assets/images/bottom-up-card-two.svg",
		price: 2500,
		color: "brand.green500",
		content: "Bottoms up is going to have you and your friends drunk!",
	},
	{
		id: 2,
		img: "/assets/icons/know-it.svg",
		title: "Know-It-All",
		description: "test your knowledge",
		cardOne: "/assets/images/know-it-card-one.svg",
		cardTwo: "/assets/images/know-it-card-two.svg",
		price: 2500,
		color: "brand.orange100",
		content: "How well do you know your math, movies and science?",
	},
	{
		id: 3,
		img: "/assets/icons/bare.svg",
		title: "Bare",
		description: "ice breakers and conversation starters",
		cardOne: "/assets/images/bare-card-one.svg",
		cardTwo: "/assets/images/bare-card-two.svg",
		price: 2500,
		color: "brand.cyan100",
		content: "Get to know one another on more intimate levels with Bare.",
	},
	{
		id: 4,
		img: "/assets/icons/closer-to.svg",
		title: "Holy Grill",
		description: "for Christian and Muslim practices",
		cardOne: "/assets/images/bottom-up-card-one.svg",
		cardTwo: "/assets/images/bottom-up-card-two.svg",
		price: 2500,
		color: "brand.pink100",
		content: "Get  with your loved ones and unlock new levels of intimacy.",
	},
	{
		id: 5,
		img: "/assets/icons/game-5.svg",
		title: "Five pillars",
		description: "five pillars is the Muslim game",
		cardOne: "/assets/images/game-5-card-one.svg",
		cardTwo: "/assets/images/game-5-card-two.svg",
		cardThree: "/assets/images/game-5-card-three.svg",
		price: 2500,
		color: "brand.yellow500",
		content: "Purchase all games at once for a special disount",
	},
];

function productImageRender(index: number) {
	switch (index) {
		case 0:
			return (
				<BottomUp cardOne={gameData[0].cardOne} cardTwo={gameData[0].cardTwo} />
			);
		case 1:
			return (
				<KnowItAll
					cardOne={gameData[1].cardOne}
					cardTwo={gameData[1].cardTwo}
				/>
			);
		case 2:
			return (
				<Bare cardOne={gameData[2].cardOne} cardTwo={gameData[2].cardTwo} />
			);
		case 3:
			return (
				<CloserToGod
					cardOne={gameData[3].cardOne}
					cardTwo={gameData[3].cardTwo}
				/>
			);
		case 4:
			return (
				<Game
					cardOne={gameData[4].cardOne}
					cardTwo={gameData[4].cardTwo}
					cardThree={gameData[4].cardThree}
				/>
			);
		default:
			return (
				<BottomUp cardOne={gameData[0].cardOne} cardTwo={gameData[0].cardTwo} />
			);
	}
}

const ExploreGames = () => {
	const dispatch = useDispatch();
	const [productIndex, setProductIndex] = useState(0);
	const rootElement = useRef<HTMLDivElement>(null);

	function handleAddToCart() {
		const selectedProduct = gameData[productIndex];

		dispatch(
			addItem({
				id: selectedProduct.id,
				name: selectedProduct.title,
				price: selectedProduct.price,
				imgUrl: selectedProduct.img,
			})
		);
	}

	return (
		<Box bg="brand.green600" mt="-1rem" id="explore">
			<Box maxW="1200px" mx="auto" pt="5rem" pb="10rem" px={["1rem", "4rem"]}>
				<Heading
					fontSize={["4rem", "6.4rem"]}
					fontWeight="500"
					color="brand.white100"
					textAlign="center"
				>
					Explore Games.
				</Heading>

				<HStack
					spacing={0}
					justifyContent="space-between"
					pt="5rem"
					flexDir={["column", "column", "column", "column", "row"]}
					ref={rootElement}
				>
					<Box
						bg="brand.white500"
						w={["100%", "100%", "100%", "80%", "545px"]}
						borderRadius="2.4rem"
						p={["2rem", "3rem"]}
						mb={["5rem", "5rem", "5rem", "5rem", "0"]}
					>
						{gameData.map((details, idx) => (
							<ExploreList
								details={details}
								key={idx}
								idx={idx}
								setProductIndex={setProductIndex}
								productIndex={productIndex}
								rootElement={rootElement}
							/>
						))}
					</Box>

					<Box
						bg={gameData[productIndex].color}
						w={["100%", "100%", "100%", "80%", "545px"]}
						borderRadius="2.4rem"
						pos="relative"
						mt="5rem"
					>
						<Flex p="18.5rem">{productImageRender(productIndex)}</Flex>

						<Flex
							flexDir={["column", "column", "column", "row"]}
							bg="brand.white100"
							p="3rem"
							alignItems="center"
							justifyContent="space-between"
							borderBottomRightRadius="2.4rem"
							borderBottomLeftRadius="2.4rem"
							pos="relative"
							zIndex="1"
						>
							<Text
								fontSize={["2rem", "2.4rem"]}
								fontWeight="500"
								color="brand.green600"
								maxW="300px"
								lineHeight="2.4rem"
							>
								{gameData[productIndex].content}
							</Text>
							<Box mt={["2rem", "0"]}>
								<LucidBtn onClick={handleAddToCart} px="2.1rem" />
							</Box>
						</Flex>
					</Box>
				</HStack>
			</Box>
		</Box>
	);
};

export { ExploreGames };
