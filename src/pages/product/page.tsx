import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, type CartItem } from '../../store/slices/cart.slice';
import type { Product } from '../../store/slices/product.slice';
import type { AppDispatch, RootState } from '../../store/store';

function ProductPage() {
	const state = useSelector((rootState: RootState) => rootState.productState);
	const dispatch = useDispatch<AppDispatch>();

	// sepet state bağlanıp veri göndermemiz lazım.
	const handleAddToCart = (product: Product) => {
		// Product nesnesini Cart nesnesine mapledik.
		const cartItem: CartItem = {
			id: product.ProductID,
			quantity: 1,
			name: product.ProductName,
			listPrice: product.UnitPrice,
		};

		dispatch(addToCart(cartItem));
	};

	if (state.loading)
		return (
			<Box sx={{ top: '50%', justifyContent: 'center', display: 'flex' }}>
				<CircularProgress />
			</Box>
		);

	return (
		<Box sx={{ padding: 4 }}>
			<Grid container spacing={3}>
				{state.data.map((product) => (
					<Grid size={{ xs: 12, md: 4, lg: 3 }} key={product.id}>
						<Card>
							<CardMedia
								component="img"
								height="150"
								image={
									'https://plus.unsplash.com/premium_photo-1719289718388-7a76957bcba2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt={product.ProductName}
							/>
							<CardContent>
								<Typography variant="h6">{product.ProductName}</Typography>
								<Typography variant="body2" color="text.secondary">
									Stok: {product.UnitsInStock}
								</Typography>
								<Typography variant="body1" color="text.primary">
									Fiyat: {product.UnitPrice} TL
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									variant="contained"
									onClick={() => handleAddToCart(product)}
								>
									Sepete Ekle
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default ProductPage;
