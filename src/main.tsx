/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, Link, RouterProvider } from 'react-router';
import { CounterContext, CounterProvider } from './context/counter.tsx';
import MainLayout from './layouts/main/layout.tsx';
import CounterPage from './pages/counter-contextapi/page.tsx';
import CounterPageV2 from './pages/counter-redux/page.tsx';
import { store } from './store/store.ts';
import ProductPage from './pages/product/page.tsx';

const router = createBrowserRouter([
	{
		path: '',
		Component: MainLayout,
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
			{
				path: '/products',
				Component: ProductPage,
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
