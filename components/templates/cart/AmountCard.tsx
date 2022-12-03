import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface AmountProps {
	price: number;
}

const AmountCard = ({ price }: AmountProps) => {
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
			<Text fontSize="1.8rem" fontWeight="bold" color="brand.green600">
				Subtotal
			</Text>
			<Text fontSize="1.4rem" fontWeight="bold" color="brand.green600">
				N{price}
			</Text>
		</Flex>
	);
};

export default AmountCard;
