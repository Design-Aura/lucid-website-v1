import { VStack } from "@chakra-ui/react";
import { useAppSelector } from "hooks/useRedux";
import React, { useMemo } from "react";
import AmountCard from "./AmountCard";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
	const { items } = useAppSelector((state) => state.cart);

	const getTotalAmount = useMemo(() => {
		return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	}, [items]);
	return (
		<VStack h="82%" spacing="1rem" mt="1.5rem">
			{items?.map((item) => (
				<ProductCard key={item.id} item={item} />
			))}

			{items?.length > 0 && <AmountCard price={getTotalAmount} />}
		</VStack>
	);
};

export default ProductContainer;
