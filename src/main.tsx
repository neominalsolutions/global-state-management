/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
} from 'react-router';
import './App.css';
import { CounterContext, CounterProvider } from './context/counter.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import CounterPage from './pages/counter-contextapi/page.tsx';
import CounterPageV2 from './pages/counter-redux/page.tsx';

const router = createBrowserRouter([
	{
		path: '',
		Component: () => {
			return (
				<div>
					<Link to="/context-api">Context API Demo</Link>
					{ ' | ' }
					<Link to="/redux-api">Redux API Demo</Link>
					<Outlet />
				</div>
			);
		},
		children: [
			{ index: true, Component: CounterPage },
			{
				path: '/context-api',
				Component: () => {
					// context api bağlandık.
					const { state, increase } = useContext(CounterContext) as any;

					return (
						<>
							<p>Sayac:{state.count}</p>
							<button onClick={increase}>(+)</button>
							<br></br>
							<Link to="/">Counter Page</Link>
						</>
					);
				},
			},
			{
				path: '/redux-api',
				Component: CounterPageV2,
			},
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<CounterProvider>
			<RouterProvider router={router} />
		</CounterProvider>
	</Provider>
);
