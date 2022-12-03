import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { CartItem } from "@interfaces/redux";
import { useAppDispatch } from "hooks/useRedux";
import Image from "next/image";
import React from "react";
import { addQuantity, subtractQuantity } from "state/feature/cart/cartSlice";

interface ProductProps {
	item: CartItem;
}

const ProductCard = ({ item }: ProductProps) => {
	const dispatch = useAppDispatch();
	return (
		<Flex
			w="100%"
			justifyContent="space-between"
			px="1rem"
			py="1.25rem"
			bg="brand.grey200"
			borderWidth="1px"
			borderColor="brand.grey500"
			rounded="1rem"
		>
			<HStack spacing="0.875rem" justifyContent="space-between">
				<Image src={item.imgUrl} width={40} height={40} />
				<Box>
					<Text
						fontSize="1.4rem"
						fontWeight="bold"
						color="brand.blue100"
						textTransform="uppercase"
					>
						pack of 75
					</Text>
					<Text fontSize="2.4rem" fontWeight="medium" color="brand.green600">
						{item.name}
					</Text>
				</Box>
			</HStack>

			<VStack justifyContent="space-between">
				<HStack alignItems="center" justifyContent="center" spacing="1rem">
					<Center
						bgColor="transparent"
						borderWidth="1px"
						borderColor="brand.green600"
						rounded="full"
						w="1rem"
						h="1rem"
						cursor="pointer"
						onClick={() => dispatch(addQuantity(item.id))}
					>
						<AddIcon w={2} h={2} />
					</Center>

					<Text fontSize="1.5rem" fontWeight="bold" color="brand.green600">
						{item.quantity}
					</Text>

					<Center
						bgColor="transparent"
						borderWidth="1px"
						borderColor="brand.green600"
						rounded="full"
						w="1rem"
						h="1rem"
						cursor="pointer"
						onClick={() => dispatch(subtractQuantity(item.id))}
					>
						<MinusIcon w={2} h={2} />
					</Center>
				</HStack>

				<Text
					w="full"
					fontSize="1.4rem"
					fontWeight="bold"
					color="brand.green600"
					textAlign="right"
				>
					N{item.price * item.quantity}
				</Text>
			</VStack>
		</Flex>
	);
};

export default ProductCard;
