import { VStack } from "@chakra-ui/react";
import { truncate } from "@utils/truncate";
import { useAppSelector } from "hooks/useRedux";
import React, { useMemo } from "react";
import CheckoutForm from "./CheckoutForm";
import TitlePrice from "./TitlePrice";

const Checkout = () => {
	const { shoppingDetails, items } = useAppSelector((state) => state.cart);

	const getTotalAmount = useMemo(
		() => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
		[items]
	);

	const getLocation = useMemo(() => {
		const { fullAddress, state, country } = shoppingDetails;
		return `${fullAddress}, ${state}, ${country}`;
	}, [shoppingDetails]);

	return (
		<VStack mt="2rem" h="82%" overflowY="auto">
			<TitlePrice
				title="pack of 75"
				price={getTotalAmount}
				content={`Games x ${items.length}`}
			/>
			<TitlePrice
				title="shipping details"
				price={3000}
				content={truncate(getLocation, 25)}
			/>

			<CheckoutForm />
		</VStack>
	);
};

export default Checkout;
