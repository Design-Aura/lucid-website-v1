import { Box, Flex, Text } from "@chakra-ui/react";
import { footerSocial, links } from "@utils/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<Box bg="brand.black" mt="-1rem">
			<Box maxW="555px" mx="auto" pt="5rem" pb="10rem" px={["1rem", "4rem"]}>
				<Flex alignItems="center" justifyContent="center" gap="2rem">
					{footerSocial.map((social) => (
						<Link key={social.name} href={social.link}>
							<a>
								<Image src={social.icon} width={32} height={32} />
							</a>
						</Link>
					))}
				</Flex>

				<Flex
					alignItems="center"
					justifyContent="center"
					gap={[".6rem", "2rem", "2rem", "3rem"]}
					mt="2.5rem"
				>
					{links.map((link) => (
						<Link key={link.name} href={link.link}>
							<a>
								<Text
									fontWeight="medium"
									fontSize="1.5rem"
									color="brand.white100"
								>
									{link.name}
								</Text>
							</a>
						</Link>
					))}
				</Flex>

				<Flex
					flexDir="column"
					alignItems="center"
					justifyContent="center"
					gap="4rem"
					mt="5rem"
				>
					<Image src="/assets/icons/footerLogo.svg" width={258} height={230} />

					<Text fontSize="1.6rem" color="brand.white200">
						© 2022 All Rights Reserved.
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export { Footer };
