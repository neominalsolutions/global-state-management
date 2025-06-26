/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../../context/counter';

const CounterView = () => {
	// değişen state değerini okumak için state bağlandık.
	const { state } = useContext(CounterContext) as any;

	return (
		<>
			<h1>Counter View</h1>
			<p>Sayac: {state.count}</p>
		</>
	);
};

const CounterActions = () => {
	const { state, increase } = useContext(CounterContext) as any;
	// global state değiştirmek için increase function çağırdım

	// her state değişiminde tetiklensin
	useEffect(() => {
		alert('state değişti güncel count !' + state.count);
	}, [state]);

	return (
		<div style={{ padding: 20 }}>
			<button onClick={increase}>(+)</button>
			<button>(-)</button>
			<button>(0)</button>
		</div>
	);
};

function CounterPage() {
	const [indexState, setIndexState] = useState(1);
	const onTabChange = (index: number) => {
		setIndexState(index);
	};

	return (
		<>
			<div>
				{' '}
				<button onClick={() => onTabChange(1)}>Tab-1</button>
				<button onClick={() => onTabChange(2)}>Tab-2</button>
			</div>

			{/* <CounterProvider> */}
			{indexState === 1 && <CounterView />}
			{indexState === 2 && <CounterActions />}
			{/* </CounterProvider> */}
		</>
	);
}

export default CounterPage;
