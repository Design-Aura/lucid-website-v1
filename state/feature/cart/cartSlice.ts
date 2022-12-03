import { CartState } from "@interfaces/redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
	items: [],
	isCartOpen: false,
	checkoutStage: "cart",
	shoppingDetails: {
		fullName: "",
		country: "",
		state: "",
		postCode: "",
		fullAddress: "",
		landmark: "",
	},
	contactDetails: {
		email: "",
		phone: "",
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.items.push({
					...newItem,
					quantity: 1,
				});
			}
		},
		removeItem: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem && existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else if (existingItem) {
				existingItem.quantity--;
			}
		},
		addQuantity: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem) {
				existingItem.quantity++;
			}
		},
		subtractQuantity: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem && existingItem.quantity > 1) {
				existingItem.quantity--;
			}
		},
		toggleCart: (state) => {
			state.isCartOpen = !state.isCartOpen;
		},
		setCheckoutStage: (state, action) => {
			state.checkoutStage = action.payload;
		},
		setShoppingDetails: (state, action) => {
			state.shoppingDetails = action.payload;
		},
		setContactDetails: (state, action) => {
			state.contactDetails = action.payload;
		},
	},
});

export const {
	addItem,
	removeItem,
	toggleCart,
	addQuantity,
	subtractQuantity,
	setCheckoutStage,
	setShoppingDetails,
	setContactDetails,
} = cartSlice.actions;

export default cartSlice.reducer;
