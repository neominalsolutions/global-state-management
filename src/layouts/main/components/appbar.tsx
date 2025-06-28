import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router';

export default function MyAppBar() {
	const [cartCount] = React.useState(3); // Örnek sepet verisi

	return (
		<AppBar position="static">
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				{/* Sol boşluk için boş bir kutu */}
				<Box sx={{ width: 100 }} />

				{/* Ortalanmış menü linkleri */}
				<Box sx={{ display: 'flex', gap: 4 }}>
					<Link style={{ textDecoration: 'none', color: 'white' }} to="#">
						Home
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'white' }}
						to="/products"
					>
						Ürünler
					</Link>
				</Box>

				{/* Sepet ikonu */}
				<IconButton color="inherit">
					<Badge badgeContent={cartCount} color="error">
						<ShoppingCartIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
