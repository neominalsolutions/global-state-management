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
import CounterPage from './components/page.tsx';
import { CounterContext, CounterProvider } from './context/counter.tsx';
import './index.css';

const router = createBrowserRouter([
	{
		path: '',
		Component: () => {
			return (
				<div>
					<Link to="/context-api">Context API Demo</Link>
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
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<CounterProvider>
		<RouterProvider router={router} />
	</CounterProvider>
);
