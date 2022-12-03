import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
	Center,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useAppSelector } from "hooks/useRedux";
import React from "react";
import { useDispatch } from "react-redux";
import { setContactDetails } from "state/feature/cart/cartSlice";

const CheckoutForm = () => {
	const dispatch = useDispatch();
	const { contactDetails } = useAppSelector((state) => state.cart);
	return (
		<VStack
			w="100%"
			h="32rem"
			alignItems="flex-start"
			px="1rem"
			py="1.25rem"
			bg="brand.grey200"
			borderWidth="1px"
			borderColor="brand.grey500"
			rounded="1rem"
		>
			<HStack w="full" justifyContent="space-between">
				<Text
					fontSize="1.4rem"
					fontWeight="bold"
					color="brand.blue100"
					textTransform="uppercase"
				>
					Contact details
				</Text>
			</HStack>

			<VStack w="full" gap="0.75rem">
				<InputGroup w="full" h="4.5rem" rounded="4rem">
					<InputLeftElement pointerEvents="none" h="full" ml="1rem">
						<Center
							w="2.5rem"
							h="2.5rem"
							rounded="full"
							bg="brand.white100"
							borderWidth="4px"
							borderColor="brand.grey300"
						>
							<EmailIcon color="green600" />
						</Center>
					</InputLeftElement>
					<Input
						rounded="4rem"
						w="full"
						h="full"
						type="email"
						placeholder="Email Address"
						pl="4.5rem"
						fontSize="1.6rem"
						fontWeight="medium"
						value={contactDetails.email}
						onChange={(e) =>
							dispatch(
								setContactDetails({ ...contactDetails, email: e.target.value })
							)
						}
					/>
				</InputGroup>
				<InputGroup w="full" h="4.5rem" rounded="4rem">
					<InputLeftElement pointerEvents="none" h="full" ml="1rem">
						<Center
							w="2.5rem"
							h="2.5rem"
							rounded="full"
							bg="brand.white100"
							borderWidth="4px"
							borderColor="brand.grey300"
						>
							<PhoneIcon color="green600" />
						</Center>
					</InputLeftElement>
					<Input
						rounded="4rem"
						w="full"
						h="full"
						type="tel"
						placeholder="Phone Number"
						pl="4.5rem"
						fontSize="1.6rem"
						fontWeight="medium"
						value={contactDetails.phone}
						onChange={(e) =>
							dispatch(
								setContactDetails({ ...contactDetails, phone: e.target.value })
							)
						}
					/>
				</InputGroup>
			</VStack>
		</VStack>
	);
};

export default CheckoutForm;
