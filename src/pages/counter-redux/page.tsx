import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../../store/slices/counter.slice';
import { type AppDispatch, type RootState } from '../../store/store';

const CounterView = () => {
	// değişen state değerini okumak için state bağlandık.
	const state = useSelector((rootState: RootState) => rootState.counterState);

	return (
		<>
			<h1>Counter View</h1>
			<p>Sayac: {state.count}</p>
		</>
	);
};

const CounterActions = () => {
	const dispatch = useDispatch<AppDispatch>(); // action tetiklemek için kullanılan hook
	const state = useSelector((rootState: RootState) => rootState.counterState); // state okumak için kullanılan hook

	// her state değişiminde tetiklensin
	useEffect(() => {
		alert('state değişti güncel count !' + state.count);
	}, [state]);

	return (
		<div style={{ padding: 20 }}>
			<button
				onClick={() => {
					dispatch(increase());
				}}
			>
				(+)
			</button>
			<button>(-)</button>
			<button>(0)</button>
		</div>
	);
};

function CounterPageV2() {
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

			{indexState === 1 && <CounterView />}
			{indexState === 2 && <CounterActions />}
		</>
	);
}

export default CounterPageV2;
