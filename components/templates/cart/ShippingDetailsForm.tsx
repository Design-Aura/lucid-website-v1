import {
	Box,
	Center,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useAppSelector } from "hooks/useRedux";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { setShoppingDetails } from "state/feature/cart/cartSlice";

const ShippingDetailsForm = () => {
	const dispatch = useDispatch();
	const { shoppingDetails } = useAppSelector((state) => state.cart);
	return (
		<VStack
			w="100%"
			h="34rem"
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
					shipping details
				</Text>
				<Text fontSize="1.8rem" fontWeight="bold" color="brand.green600">
					N3,000
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
							<Image src="/assets/icons/user-m.svg" width={12} height={12} />
						</Center>
					</InputLeftElement>
					<Input
						rounded="4rem"
						w="full"
						h="full"
						type="text"
						placeholder="Full Name"
						pl="4.5rem"
						fontSize="1.6rem"
						fontWeight="medium"
						_focus={{
							outline: "none",
							boxShadow: "none",
						}}
						value={shoppingDetails?.fullName}
						onChange={(e) =>
							dispatch(
								setShoppingDetails({
									...shoppingDetails,
									fullName: e.target.value,
								})
							)
						}
					/>
				</InputGroup>

				<Box
					borderWidth="1px"
					borderColor="brand.grey600"
					pos="relative"
					w="full"
					h="4.5rem"
					rounded="4rem"
				>
					<Select
						rounded="4rem"
						w="full"
						h="4.5rem"
						placeholder="Select country"
						fontSize="1.6rem"
						fontWeight="medium"
						borderWidth={0}
						pl="3.7rem"
						pr="1rem"
						_focus={{
							outline: "none",
							boxShadow: "none",
						}}
						value={shoppingDetails?.country}
						onChange={(e) =>
							dispatch(
								setShoppingDetails({
									...shoppingDetails,
									country: e.target.value,
								})
							)
						}
					>
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>

					<Center
						w="2.5rem"
						h="2.5rem"
						rounded="full"
						bg="brand.white100"
						borderWidth="4px"
						borderColor="brand.grey300"
						pos="absolute"
						style={{ top: "50%", left: "1rem", transform: "translateY(-50%)" }}
					>
						<Image src="/assets/icons/location-m.svg" width={12} height={12} />
					</Center>
				</Box>

				<SimpleGrid columns={2} gap="2rem">
					<Select
						rounded="4rem"
						w="full"
						h="4.5rem"
						placeholder="Select state"
						fontSize="1.6rem"
						fontWeight="medium"
						_focus={{
							outline: "none",
							boxShadow: "none",
						}}
						value={shoppingDetails?.state}
						onChange={(e) =>
							dispatch(
								setShoppingDetails({
									...shoppingDetails,
									state: e.target.value,
								})
							)
						}
					>
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>

					<InputGroup w="full" h="4.5rem" rounded="4rem">
						<Input
							rounded="4rem"
							w="full"
							h="full"
							type="text"
							placeholder="Postal Code"
							pl="2rem"
							fontSize="1.6rem"
							fontWeight="medium"
							_focus={{
								outline: "none",
								boxShadow: "none",
							}}
							value={shoppingDetails?.postCode}
							onChange={(e) =>
								dispatch(
									setShoppingDetails({
										...shoppingDetails,
										postCode: e.target.value,
									})
								)
							}
						/>
					</InputGroup>
				</SimpleGrid>

				<InputGroup w="full" h="4.5rem" rounded="4rem">
					<Input
						rounded="4rem"
						w="full"
						h="full"
						type="text"
						placeholder="Full Address"
						pl="2rem"
						fontSize="1.6rem"
						fontWeight="medium"
						_focus={{
							outline: "none",
							boxShadow: "none",
						}}
						value={shoppingDetails?.fullAddress}
						onChange={(e) =>
							dispatch(
								setShoppingDetails({
									...shoppingDetails,
									fullAddress: e.target.value,
								})
							)
						}
					/>
				</InputGroup>

				<InputGroup w="full" h="4.5rem" rounded="4rem">
					<Input
						rounded="4rem"
						w="full"
						h="full"
						type="text"
						placeholder="Landmark (Optional)"
						pl="2rem"
						fontSize="1.6rem"
						fontWeight="medium"
						_focus={{
							outline: "none",
							boxShadow: "none",
						}}
						value={shoppingDetails?.landmark}
						onChange={(e) =>
							dispatch(
								setShoppingDetails({
									...shoppingDetails,
									landMark: e.target.value,
								})
							)
						}
					/>
				</InputGroup>
			</VStack>
		</VStack>
	);
};

export default ShippingDetailsForm;
