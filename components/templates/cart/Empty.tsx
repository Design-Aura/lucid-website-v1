import { Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Empty = () => {
	return (
		<Center flexDir="column" h="84%" w="full" gap="1rem">
			<Image src="/assets/icons/eyeIcon.png" width={152} height={87} />

			<Text fontSize="2rem">Your cart is empty.</Text>
		</Center>
	);
};

export default Empty;
