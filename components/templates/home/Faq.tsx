import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Heading,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React from "react";

const faqData = [
	{
		question: "What is Lucid ?",
		answer:
			"Lucid is a versatile combination of games that can be played by various groups and categories of individuals. Lucid games are meant to breed togetherness and conversations within the groups they are played in.",
	},
	{
		question: "What games are available on Lucid ?",
		answer:
			"Lucid is a versatile combination of games that can be played by various groups and categories of individuals. Lucid games are meant to breed togetherness and conversations within the groups they are played in.",
	},
	{
		question: "How can I play ?",
		answer:
			"Lucid is a versatile combination of games that can be played by various groups and categories of individuals. Lucid games are meant to breed togetherness and conversations within the groups they are played in.",
	},
	{
		question: "How many players can play the games ?",
		answer:
			"Lucid is a versatile combination of games that can be played by various groups and categories of individuals. Lucid games are meant to breed togetherness and conversations within the groups they are played in.",
	},
	{
		question: "Does Lucid have an app ?",
		answer:
			"Lucid is a versatile combination of games that can be played by various groups and categories of individuals. Lucid games are meant to breed togetherness and conversations within the groups they are played in.",
	},
	{
		question: "How much do the games cost ?",
		answer:
			"Lucid is a versatile combination of games that can be played by various groups and categories of individuals. Lucid games are meant to breed togetherness and conversations within the groups they are played in.",
	},
];

const Faq = () => {
	return (
		<Box bg="brand.green600" mt="-1rem">
			<Box bg="brand.faq_bg">
				<Box
					maxW={["800px", "800px", "600px", "800px", "980px"]}
					minH="400px"
					mx="auto"
					pt={["2rem", "10rem"]}
					pb="10rem"
					px={["1rem", "4rem"]}
				>
					<Heading
						fontSize={["4rem", "6.4rem"]}
						fontWeight="700"
						color="brand.white100"
						textAlign="center"
					>
						FAQs.
					</Heading>

					<Accordion mt="1rem">
						{faqData.map((faq, index) => (
							<AccordionItem
								key={index}
								border="none"
								bg="brand.white500"
								px="2rem"
								py="1rem"
								rounded="1.5rem"
								mb="1rem"
							>
								{({ isExpanded }) => (
									<>
										<h2>
											<AccordionButton border="none">
												<Box
													fontSize={["1.65rem", "1.65rem", "1.65rem", "2.4rem"]}
													color="brand.white100"
													fontWeight="bold"
													flex="1"
													textAlign="left"
												>
													{faq.question}
												</Box>
												<Flex
													width="3rem"
													height="3rem"
													rounded="full"
													bg="brand.white500"
													alignItems="center"
													justifyContent="center"
												>
													{isExpanded ? (
														<MinusIcon color="brand.white100" fontSize="12px" />
													) : (
														<AddIcon color="brand.white100" fontSize="12px" />
													)}
												</Flex>
											</AccordionButton>
										</h2>
										<AccordionPanel
											pb={4}
											color="brand.white300"
											fontSize={["1.3rem", "1.3rem", "1.3rem", "1.8rem"]}
											fontWeight="400"
											lineHeight={["1.7rem", "1.7rem", "1.7rem", "2.2rem"]}
										>
											{faq.answer}
										</AccordionPanel>
									</>
								)}
							</AccordionItem>
						))}
					</Accordion>
				</Box>
			</Box>
		</Box>
	);
};

export default Faq;
