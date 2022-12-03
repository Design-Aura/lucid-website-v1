import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<Box
			bg="brand.hero_bg"
			bgRepeat="no-repeat"
			bgPos="top"
			bgSize="cover"
			h="100vh"
		>
			<Box bg="brand.green700">
				<VStack
					textAlign="center"
					display="flex"
					alignItems="center"
					justifyContent="center"
					h="100vh"
					color="brand.white100"
					maxW="1200px"
					mx="auto"
					pt={["4rem"]}
				>
					<Heading
						fontWeight="700"
						fontSize={["4.5rem", "9rem", "9rem", "12rem"]}
						letterSpacing="-0.2rem"
						lineHeight={["4.2rem", "8.2rem", "8.2rem", "11.2rem"]}
						maxW="1000px"
					>
						Our games are fun for{" "}
						<Box as="span" color="brand.yellow600">
							everyone.
						</Box>
					</Heading>
					<Text
						fontWeight="500"
						fontSize={["1.8rem", "2.2rem", "2.2rem", "3.2rem"]}
						maxW={["350px", "500px", "500px", "700px"]}
						letterSpacing="-0.1rem"
						lineHeight={["2.6rem", "3rem", "3rem", "4rem"]}
					>
						With Lucid, you’re never alone. Our games encourage conversations to
						those that matter to you. We’re redefining fun for you, and for
						everyone.
					</Text>

					<Link href="#explore" passHref>
						<Box pos="relative" top="5rem" cursor="pointer">
							<Box>
								<Image
									src="/assets/icons/scroll-down-star.svg"
									width="90"
									height="90"
									alt="Scroll Down"
								/>
							</Box>

							<Box pos="absolute" top="3.2rem" left="3.4rem">
								<Image
									src="/assets/icons/arrow-down.svg"
									width="25"
									height="25"
									alt="Arrow Down"
								/>
							</Box>
						</Box>
					</Link>
				</VStack>
			</Box>
		</Box>
	);
};

export { Hero };
