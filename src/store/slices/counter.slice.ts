import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'COUNTER', // COUNTER_increase
	initialState: { count: 0 },
	reducers: {
		// reducer içerisinde state değiştiren functionlarımız istediiğmiz kadar function yazarak state değişimi yapabiliriz.
		increase: (state) => {
			state.count = state.count + 1;
		},
	},
});

export const { increase } = counterSlice.actions; // useDispatch hook bu actionları tetikleyeceğiz.
export const CounterReducer = counterSlice.reducer; // store reducer tanımı yapmak için dışarı çıkardık.
// CounterReducer -> CounterState sorumlu olan function service.

// ContextAPi de state değiştirme işlemlerinden sorumlu arkadaş Provider'dı burada ise Reducer.
