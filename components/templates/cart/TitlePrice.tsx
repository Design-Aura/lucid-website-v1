import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface AmountProps {
	title: string;
	content: string;
	price: number;
}

const TitlePrice = ({ title, content, price }: AmountProps) => {
	return (
		<Flex
			w="100%"
			justifyContent="space-between"
			alignItems="center"
			px="1rem"
			py="1.25rem"
			bg="brand.grey200"
			borderWidth="1px"
			borderColor="brand.grey500"
			rounded="1rem"
		>
			<VStack w="full">
				<Text
					fontSize="1.4rem"
					fontWeight="bold"
					color="brand.blue100"
					textTransform="uppercase"
					textAlign="left"
					w="full"
				>
					{title}
				</Text>
				<Text
					w="full"
					fontSize="1.8rem"
					fontWeight="bold"
					color="brand.green600"
				>
					{content}
				</Text>
			</VStack>
			<Text fontSize="1.4rem" fontWeight="bold" color="brand.green600">
				N{price}
			</Text>
		</Flex>
	);
};

export default TitlePrice;
