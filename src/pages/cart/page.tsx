import { Add, Delete, Remove } from '@mui/icons-material';
import {
	Card,
	CardContent,
	Container,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
	addQuantity,
	deleteItemFromCart,
	removeQuantity,
} from '../../store/slices/cart.slice';
import { type AppDispatch, type RootState } from '../../store/store';

function CartSummaryPage() {
	const cartState = useSelector((rootState: RootState) => rootState.cartState);
	const dispatch = useDispatch<AppDispatch>();

	const onItemDelete = (id: number) => {
		dispatch(deleteItemFromCart({ id }));
	};

	const onAddQuantity = (id: number) => {
		dispatch(addQuantity({ id }));
	};

	const onRemoveQuantity = (id: number) => {
		dispatch(removeQuantity({ id }));
	};

	return (
		<Container maxWidth="sm" sx={{ mt: 4 }}>
			<Typography variant="h4" gutterBottom>
				Sepetim
			</Typography>
			{cartState.items.map((item, index) => {
				return (
					<Card key={index} sx={{ mb: 2 }}>
						<CardContent>
							<Grid container alignItems="center" spacing={2}>
								<Grid size={4}>
									<Typography>{item.name}</Typography>
								</Grid>
								<Grid size={4}>
									<IconButton onClick={() => onRemoveQuantity(item.id)}>
										<Remove />
									</IconButton>
									<Typography component="span">{item.quantity}</Typography>
									<IconButton onClick={() => onAddQuantity(item.id)}>
										<Add />
									</IconButton>
								</Grid>
								<Grid size={3}>
									{/* birim fiyat */}
									<Typography>{item.quantity * item.listPrice} ₺</Typography>
								</Grid>
								<Grid size={1}>
									<IconButton onClick={() => onItemDelete(item.id)}>
										<Delete />
									</IconButton>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				);
			})}

			<Typography variant="h6" align="right">
				{/* toplam fiyat */}
				Sepet Toplamı: {cartState.total} ₺
			</Typography>
		</Container>
	);
}

export default CartSummaryPage;
