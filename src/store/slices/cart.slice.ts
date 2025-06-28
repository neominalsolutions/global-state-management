import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
	id: number;
	quantity: number;
	name: string;
	listPrice: number;
}

export type CartState = {
	items: CartItem[];
	total: number;
};
const initState: CartState = { items: [], total: 0 };

const cartSlice = createSlice({
	name: 'CART',
	initialState: initState,
	reducers: {
		addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
			const itemExists = state.items.find((x) => x.id === action.payload.id);

			if (itemExists) {
				itemExists.quantity += 1;
			} else {
				state.items.push(action.payload);
			}

			// sepet toplamı bulma.
			state.total = state.items.reduce(
				(total, value) => total + value.quantity * value.listPrice,
				0
			);
		},
	},
});

export const { addToCart } = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
