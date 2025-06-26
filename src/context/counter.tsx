/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react';

// global değişkeni içerisinde barındarıan servis
// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext(null);

type CounterProps = {
	children: React.ReactNode;
};

export const CounterProvider = ({ children }: CounterProps) => {
	// children props: reactda bir parent component içinde child olarak component render etmek için kullanılan bir özel props değeridir. children olarak yazılmak zorundadır.

	const [state, setState] = useState({ count: 0 }); // provider içinde tanımlı olan state global state haline gelir.

	const increase = () => {
		setState({ count: state.count + 1 });
	};

	// veriyi farklı componentlerden değiştirmek için function var. increase function
	// verinin güncel değerini componentten almak için state -> context deki güncel state

	const values: any = { state, increase };

	return (
		<CounterContext.Provider value={values}>{children}</CounterContext.Provider>
	);
};
