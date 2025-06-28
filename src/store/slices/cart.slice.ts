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

// 3 farklı case için kullandığımızdan dolayı function yaptık.
const calculateTotal = (state: CartState): number => {
	return state.items.reduce(
		(total, value) => total + value.quantity * value.listPrice,
		0
	);
};

// private function
const onItemRemoveFromCart = (
	state: CartState,
	action: PayloadAction<{ id: number }>
) => {
	const deleteIndex = state.items.findIndex((x) => x.id === action.payload.id);
	state.items.splice(deleteIndex, 1); // diziden eleman sil
	state.total = calculateTotal(state);
};

const cartSlice = createSlice({
	name: 'CART',
	initialState: initState,
	reducers: {
		addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
			// sepete ekleme action yazalım.
			// aynı ürün sepette var mı ?
			const itemExists = state.items.find((x) => x.id === action.payload.id);

			// varsa adet artır
			if (itemExists) {
				itemExists.quantity += 1;
			} else {
				// yoksa ekle
				state.items.push(action.payload);
			}

			// sepet toplamı bulma.
			state.total = calculateTotal(state);
		},
		addQuantity: (state: CartState, action: PayloadAction<{ id: number }>) => {
			const updateModel = state.items.find((x) => x.id === action.payload.id);

			if (updateModel) {
				updateModel.quantity += 1;
			}

			state.total = calculateTotal(state);
		},
		removeQuantity: (
			state: CartState,
			action: PayloadAction<{ id: number }>
		) => {
			const updateModel = state.items.find((x) => x.id === action.payload.id);

			console.log('updateModel', updateModel);

			if (updateModel) {
				updateModel.quantity -= 1;

				// quantity 0 olursa bu durumda yapılacak işlem
				if (updateModel.quantity === 0) {
					const updateIndex = state.items.findIndex(
						(x) => x.id === action.payload.id
					);
					state.items.splice(updateIndex, 1); // diziden eleman sil
				}
			}

			// her bir silme işleminde total hesapla
			state.total = calculateTotal(state);
		},
		deleteItemFromCart: onItemRemoveFromCart, // public func
	},
});

export const { addToCart, addQuantity, removeQuantity, deleteItemFromCart } =
	cartSlice.actions;
export const CartReducer = cartSlice.reducer;
