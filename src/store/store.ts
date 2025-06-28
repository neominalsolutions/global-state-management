import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from './slices/counter.slice';
import { ProductReducer } from './slices/product.slice';

// store hangi tip stateler ile çalıştığını anlamak için reducer'ları conbine ediyor.
export const store = configureStore({
	reducer: {
		counterState: CounterReducer,
		productState: ProductReducer,
	},
});

// uygulama genelinde tüm stateleri merkezi olarak yakalayacak bir tip tanımladık
// rootState kaç tane slice varsa hepsine ait state erişmemiz sağlayan obje
// AppDispatch ise useDispatch ile action fırlatmamızı sağlayn function tipi

console.log('store', store.getState);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 1. Adım Slice tanımı
// 2. Adım Store ts Reducer tanımları
// 3. Provider tanımı main.tsx
// 4. Componentlerde useSelector ve useDispatch hookların kullanımı
