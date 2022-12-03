import { Center, Flex, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toggleCart } from "state/feature/cart/cartSlice";

const Header = () => {
	const { items } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	return (
		<Flex
			position="fixed"
			top="2.5rem"
			style={{ left: "50%", transform: "translate(-50%)" }}
			width="100%"
			maxW={["350px", "690px", "690px", "950px", "1150px"]}
			mx="auto"
			px="2rem"
			py="3rem"
			height="6rem"
			bg="brand.white100"
			rounded="1.5rem"
			alignItems="center"
			justifyContent="space-between"
			zIndex="100"
		>
			<Image src="/assets/icons/headerLogo.svg" width={40} height={35} />

			<Flex alignItems="center" gap="3rem" h="full">
				<Flex gap="3rem" mt=".8rem">
					<Link href="#">
						<a>
							<Text
								color="brand.green600"
								fontWeight="bold"
								fontSize="1.8rem"
								textTransform="uppercase"
								letterSpacing=".1rem"
							>
								Buy games
							</Text>
						</a>
					</Link>
					<Link href="#">
						<a>
							<Text
								color="brand.green600"
								fontWeight="bold"
								fontSize="1.8rem"
								textTransform="uppercase"
								letterSpacing=".1rem"
							>
								Faqs
							</Text>
						</a>
					</Link>
				</Flex>
				<Center
					position="relative"
					w="3.5rem"
					h="3.5rem"
					bg="brand.yellow600"
					rounded="1rem"
					onClick={() => dispatch(toggleCart())}
					cursor="pointer"
				>
					<Image src="/assets/icons/cart-m.svg" width={14} height={14} />

					{items?.length > 0 && (
						<Center
							w="2.5rem"
							h="2.5rem"
							rounded="full"
							bg="brand.red100"
							pos="absolute"
							fontSize="1.6rem"
							fontWeight="bold"
							as="span"
							color="brand.green600"
							top="-8px"
							right="-8px"
							padding="0"
							lineHeight="1"
							cursor="pointer"
						>
							{items?.length}
						</Center>
					)}
				</Center>
			</Flex>
		</Flex>
	);
};

export { Header };
