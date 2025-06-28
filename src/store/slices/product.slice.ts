/* eslint-disable @typescript-eslint/no-explicit-any */

import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
// API çekilen verileri tip olarak interface ile karşılarız.
interface Product {
	UnitsInStock: number;
	UnitPrice: number;
	ProductName: string;
	ProductID: number;
}
export type ProductState = {
	// Asenkron veri
	loading: boolean; // yükleme anı
	data: Product[]; // veri çekildiyse
	error: any; // hata durumunda
};
// ilk veri yükleme asenkron br şekilde olmalı
// redux da asnyc işlemler thunk middleware ile yapılır.
export const fetchProductApi = createAsyncThunk('Products_FETCH', async () => {
	const response = await axios.get(
		'https://services.odata.org/v4/northwind/northwind.svc/Products'
	);
	const data = response.data;

	// return await Promise.reject({
	// 	status: 500,
	// 	message: 'Beklemedik bir hata meydana geldi!',
	// });

	return data;
});
// Promise ile pending anı, rejected anı ve fullfilled anı gibi durumları yakalayabiliriz.
const initState: ProductState = { data: [], error: null, loading: false };
// asenkron olarak veri çekme işlemlerinde extraReducers kullanırız.

const productSlice = createSlice({
	name: 'Products',
	initialState: initState,
	reducers: {}, // senkron işlemler için state değiştirme
	extraReducers(builder) {
		builder.addCase(fetchProductApi.pending, (state: ProductState) => {
			// verinin yükleneme anı
			state.loading = true;
			state.data = [];
		});
		builder.addCase(
			fetchProductApi.fulfilled,
			(state: ProductState, action: PayloadAction<any>) => {
				// action: PayloadAction<any> eror state olarak gelicektir.

				console.log('action', action);

				state.error = null;
				state.data = action.payload.value;
				state.loading = false;
			}
		);
		builder.addCase(
			fetchProductApi.rejected,
			(state: ProductState, action: PayloadAction<any>) => {
				// action: PayloadAction<any> eror state olarak gelicektir.
				console.log('error', action.payload);
				state.error = action.payload;
				state.data = [];
				state.loading = false;
			}
		);
	},
});

export const ProductReducer = productSlice.reducer;
