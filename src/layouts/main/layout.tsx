import { Box, Container } from '@mui/material';
import MyAppBar from './components/appbar';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { fetchProductApi } from '../../store/slices/product.slice';

function MainLayout() {
	const dispatch = useDispatch<AppDispatch>();

	// daha sayfa linkine gitmeden sayfa açılışında paralel olarak sayfanın ihtiyaç duyduğu veriyi state aldık. çok fazla değişmeyen veriler için ideal bir yöntem. Sayfa refresh edilene kadar veri çekilmez.

	useEffect(() => {
		dispatch(fetchProductApi());
	}, []);

	return (
		<Container maxWidth="xl">
			<MyAppBar />
			<Box sx={{ padding: 5 }}>
				<Outlet />
			</Box>
		</Container>
	);
}

export default MainLayout;
