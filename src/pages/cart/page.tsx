import {
	Card,
	CardContent,
	Container,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

function CartSummaryPage() {
	const cartItems = [
		{ name: 'Ürün A', quantity: 1, total: 50 },
		{ name: 'Ürün B', quantity: 2, total: 80 },
		{ name: 'Ürün C', quantity: 1, total: 100 },
	];

	const onDelete = (index: number) => {
		console.log('sil', index);
	};

	const onUpdateQuantity = (index: number) => {
		console.log('update quantity + 1', index);
	};

	const onRemove = (index: number) => {
		console.log('update quantity - 1', index);
	};

	const calculateTotal = () =>
		cartItems.reduce((sum, item) => sum + item.total, 0);

	return (
		<Container maxWidth="sm" sx={{ mt: 4 }}>
			<Typography variant="h4" gutterBottom>
				Sepetim
			</Typography>
			{cartItems.map((item, index) => {
				return (
					<Card key={index} sx={{ mb: 2 }}>
						<CardContent>
							<Grid container alignItems="center" spacing={2}>
								<Grid size={4}>
									<Typography>{item.name}</Typography>
								</Grid>
								<Grid size={4}>
									<IconButton onClick={() => onRemove(index)}>
										<Remove />
									</IconButton>
									<Typography component="span">{item.quantity}</Typography>
									<IconButton onClick={() => onUpdateQuantity(index)}>
										<Add />
									</IconButton>
								</Grid>
								<Grid size={3}>
									<Typography>{item.total} ₺</Typography>
								</Grid>
								<Grid size={1}>
									<IconButton onClick={() => onDelete(index)}>
										<Delete />
									</IconButton>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				);
			})}

			<Typography variant="h6" align="right">
				Sepet Toplamı: {calculateTotal()} ₺
			</Typography>
		</Container>
	);
}

export default CartSummaryPage;
