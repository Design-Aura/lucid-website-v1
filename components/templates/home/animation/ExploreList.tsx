import { Box, Flex, Text } from "@chakra-ui/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ExploreGamesProps } from "../ExploreGames";

interface ExploreListProps {
	details: ExploreGamesProps;
	idx: number;
	setProductIndex: (idx: number) => void;
	productIndex: number;
	rootElement: any;
}

const ExploreList = ({
	details,
	idx,
	setProductIndex,
	productIndex,
	rootElement,
}: ExploreListProps) => {
	const [isActive, setIsActive] = useState(false);
	const listRef = useRef<HTMLDivElement>(null);

	function handleSelectList(idx: number) {
		setIsActive(true);
		setProductIndex(idx);

		gsap.context(() => {
			gsap.fromTo(
				listRef.current,
				{
					y: 40,
				},
				{
					y: 0,
					ease: "bounce",
					duration: 0.8,
				}
			);
		}, rootElement);
	}
	return (
		<Box
			role="group"
			onClick={() => handleSelectList(idx)}
			mb={["1rem", "1.5rem"]}
			_last={{ mb: "0" }}
			ref={listRef}
			cursor="pointer"
		>
			<Flex
				flexDir={["column", "column", "column", "row"]}
				justifyContent="space-between"
				alignItems="center"
				bg={productIndex === idx && isActive ? details.color : "brand.white500"}
				borderRadius="1rem"
				p={["1rem", "2rem"]}
				cursor="pointer"
				_groupHover={{ bg: details.color }}
			>
				<Flex alignItems="center">
					<Box>
						<Image
							src={details.img}
							width="50"
							height="40"
							alt={details.title}
						/>
					</Box>
					<Text
						fontSize={["1.5rem", "2.4rem"]}
						fontWeight="500"
						w="100%"
						color="brand.white100"
						ml={["1rem", "1.5rem"]}
						_groupHover={{ color: "brand.green600" }}
					>
						{details.title}
					</Text>
				</Flex>
				<Text
					fontSize={["1.2rem", "1.4rem"]}
					fontWeight="700"
					color="brand.green600"
					textTransform="uppercase"
					textAlign={["left", "right"]}
				>
					{details.description}
				</Text>
			</Flex>
		</Box>
	);
};

export default ExploreList;
