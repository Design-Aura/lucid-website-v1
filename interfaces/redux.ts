export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	imgUrl: string;
}

export interface CartState {
	items: CartItem[];
	isCartOpen: boolean;
	checkoutStage: "cart" | "shipping" | "contact";
	shoppingDetails: ShoppingDetails;
	contactDetails: ContactDetails;
}

export interface ShoppingDetails {
	fullName: string;
	country: string;
	state: string;
	postCode: string;
	fullAddress: string;
	landmark?: string;
}

export interface ContactDetails {
	email: string;
	phone: string;
}
