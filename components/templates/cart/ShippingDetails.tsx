import { VStack } from "@chakra-ui/react";
import { useAppSelector } from "hooks/useRedux";
import React, { useMemo } from "react";
import AmountCard from "./AmountCard";
import ShippingDetailsForm from "./ShippingDetailsForm";
import TitlePrice from "./TitlePrice";

const ShippingDetails = () => {
	const { items } = useAppSelector((state) => state.cart);

	const getTotalAmount = useMemo(() => {
		return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	}, [items]);
	return (
		<VStack mt="2rem" h="82%" overflowY="auto">
			<TitlePrice
				title="pack of 75"
				price={getTotalAmount}
				content={`Games x ${items.length}`}
			/>
			<ShippingDetailsForm />

			<AmountCard price={getTotalAmount + 3000} />
		</VStack>
	);
};

export default ShippingDetails;
