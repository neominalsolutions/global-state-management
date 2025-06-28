import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

function ProductPage() {
	const data = [
		{
			name: 'Ürün-1',
			id: 1,
			stock: 1,
			price: 10,
			image:
				'https://plus.unsplash.com/premium_photo-1719289718388-7a76957bcba2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-2',
			id: 2,
			stock: 2,
			price: 220,
			image:
				'https://images.unsplash.com/photo-1691096674749-29069acd529c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-3',
			id: 3,
			stock: 3,
			price: 100,
			image:
				'https://images.unsplash.com/photo-1691096674749-29069acd529c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-4',
			id: 4,
			stock: 4,
			price: 101,
			image:
				'https://plus.unsplash.com/premium_photo-1719289718388-7a76957bcba2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-5',
			id: 5,
			stock: 2,
			price: 110,
			image:
				'https://plus.unsplash.com/premium_photo-1719289718388-7a76957bcba2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-6',
			id: 6,
			stock: 1,
			price: 80,
			image:
				'https://plus.unsplash.com/premium_photo-1719289718388-7a76957bcba2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-7',
			id: 7,
			stock: 3,
			price: 75,
			image:
				'https://plus.unsplash.com/premium_photo-1719289718388-7a76957bcba2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-8',
			id: 8,
			stock: 2,
			price: 90,
			image:
				'https://plus.unsplash.com/premium_photo-1719289718388-7a76957bcba2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-9',
			id: 9,
			stock: 4,
			price: 50,
			image:
				'https://images.unsplash.com/photo-1691096674749-29069acd529c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Ürün-10',
			id: 10,
			stock: 2,
			price: 300,
			image:
				'https://plus.unsplash.com/premium_photo-1719289718388-7a76957bcba2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
	];

	const handleAddToCart = () => {};

	return (
		<Box sx={{ padding: 4 }}>
			<Grid container spacing={3}>
				{data.map((product) => (
					<Grid size={{ xs: 12, md: 4, lg: 3 }} key={product.id}>
						<Card>
							<CardMedia
								component="img"
								height="150"
								image={product.image}
								alt={product.name}
							/>
							<CardContent>
								<Typography variant="h6">{product.name}</Typography>
								<Typography variant="body2" color="text.secondary">
									Stok: {product.stock}
								</Typography>
								<Typography variant="body1" color="text.primary">
									Fiyat: {product.price} TL
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									variant="contained"
									onClick={handleAddToCart}
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
