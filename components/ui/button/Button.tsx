import { Box, Center } from "@chakra-ui/react";
import { ButtonProps } from "@interfaces/button";

const LucidBtn = ({ onClick, text, px, isOutline }: ButtonProps) => {
	return (
		<Box
			onClick={onClick}
			bg={isOutline ? "brand.white100" : "brand.yellow500"}
			borderRadius="1.6rem"
			pt="1.7rem"
			pb="1.4rem"
			px={px || "3.5rem"}
			cursor="pointer"
			textTransform="uppercase"
		>
			<Center fontSize="1.4rem" fontWeight="700">
				{text || "ADD TO CART - N2,500"}
			</Center>
		</Box>
	);
};

export { LucidBtn };
