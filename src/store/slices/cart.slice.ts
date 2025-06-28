import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
	id: number;
	quantity: number; // adet bilgisi
	name: string; // ürün adı
	listPrice: number; // sepet ürün fiyatı
}

export type CartState = {
	items: CartItem[]; // sepette birden fazla ürün olabilir.
	total: number; // sepet ürün toplam fiyat
};
const initState: CartState = { items: [], total: 0 };

const cartSlice = createSlice({
	name: 'CART',
	initialState: initState,
	reducers: {
		addToCart: (state: CartState, action: PayloadAction<CartItem>) => { // sepete ekleme action yazalım.
			// aynı ürün sepette var mı ?
			const itemExists = state.items.find((x) => x.id === action.payload.id);

			// varsa adet artır
			if (itemExists) {
				itemExists.quantity += 1;
			} else { // yoksa ekle
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
