import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	Input,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const ComingSoon = () => {
	return (
		<Box bg="brand.green600" mt="-1rem">
			<Box maxW="1200px" mx="auto" pt="5rem" pb="10rem" px={["1rem", "4rem"]}>
				<Heading
					fontSize={["4rem", "6.4rem"]}
					fontWeight="500"
					color="brand.white100"
					textAlign="left"
				>
					Coming digitally to you soon...
				</Heading>

				<Grid
					templateColumns={[
						"repeat(6, 1fr)",
						"repeat(6, 1fr)",
						"repeat(6, 1fr)",
						"repeat(6, 1fr)",
						"repeat(12, 1fr)",
					]}
					gap="1.5rem"
					mt="2rem"
				>
					<GridItem
						borderRadius="1.5rem"
						bg="brand.orange100"
						colSpan={9}
						px={["2rem", "4rem"]}
						pt="6rem"
					>
						<Flex
							flexDir={["column", "column", "column", "row"]}
							h="full"
							alignItems={["start", "start", "center", "end"]}
							justifyContent="space-between"
						>
							<Flex h="full" justifyContent="center" flexDirection="column">
								<Heading
									fontSize="1.4rem"
									mb="1.5rem"
									textTransform="uppercase"
									fontWeight="700"
									color="brand.white100"
								>
									coming soon on ios & andriod
								</Heading>
								<Heading
									fontSize="4.8rem"
									fontWeight="500"
									color="brand.green600"
									maxW={["100%", "100%", "100%", "400px"]}
									lineHeight="1"
									mb="1.25rem"
								>
									Play online with anyone,{" "}
									<Text display="inline" color="brand.white100">
										anywhere
									</Text>
								</Heading>
								<Heading
									fontSize="2.4rem"
									fontWeight="400"
									mb="2rem"
									color="brand.green600"
								>
									Be the first to know when we launch our mobile app
								</Heading>

								<Flex
									alignItems="center"
									gap="1rem"
									h="7rem"
									bg="brand.white100"
									px="0.75rem"
									borderRadius="130px"
									pos="relative"
								>
									<Image src="/assets/images/star.png" width={48} height={48} />
									<Input
										fontSize={["1.5rem", "2rem"]}
										width="100%"
										height="100%"
										border="none"
										bg="none"
										outline="none"
										boxShadow="none"
										_focusVisible={{ boxShadow: "none" }}
									/>
									<Button
										width="5rem"
										height="5rem"
										rounded="full"
										bg="brand.green600"
										padding="0"
										display="flex"
										alignItems="center"
										justifyContent="center"
										pos="absolute"
										right="1rem"
									>
										<Image
											src="/assets/images/send-m.png"
											width={24}
											height={24}
										/>
									</Button>
								</Flex>
							</Flex>

							<Box mt={["3rem", "3rem", "3rem", "0"]}>
								<Image
									src="/assets/images/snapshot.png"
									width={292}
									height={350}
									alt="app snapshot"
								/>
							</Box>
						</Flex>
					</GridItem>

					<GridItem
						borderRadius="1.5rem"
						bg="brand.white500"
						colSpan={[9, 9, 9, 9, 3]}
						p="3rem"
						display="flex"
						flexDirection="column"
						alignItems="center"
						gap="3rem"
						mt="1rem"
					>
						<Image
							src="/assets/images/half-circle.png"
							width={233}
							height={104}
						/>
						<Image src="/assets/images/eye.png" width={152} height={87} />

						<Box>
							<Heading
								fontSize="1.25rem"
								fontWeight={700}
								color="brand.white200"
								textTransform="uppercase"
								textAlign="center"
							>
								coming soon
							</Heading>
							<Heading
								fontSize="2.5rem"
								fontWeight="medium"
								color="brand.white100"
								textAlign="center"
								mt="1rem"
							>
								And there’s more...
							</Heading>
							<Text fontSize="1.6rem" textAlign="center" color="brand.white300">
								Choose avatars, play alone or with friends, view leaderboards &
								more.
							</Text>
						</Box>
					</GridItem>
				</Grid>
			</Box>
		</Box>
	);
};

export { ComingSoon };
