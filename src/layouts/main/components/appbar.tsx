import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
	AppBar,
	Badge,
	Box,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import type { RootState } from '../../../store/store';

export default function MyAppBar() {
	// cartState bağlan kaç adet olduğu bilgisi reduxdan çek
	const cartState = useSelector((rootState: RootState) => rootState.cartState);

	return (
		<AppBar position="static">
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				{/* Sol boşluk için boş bir kutu */}
				<Box sx={{ width: 100 }}>
					<Typography>LOGO</Typography>
				</Box>

				{/* Ortalanmış menü linkleri */}
				<Box sx={{ display: 'flex', gap: 4 }}>
					<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
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
					<Badge badgeContent={cartState.items.length} color="error">
						<Link style={{ color: 'white' }} to="/cart-summary">
							<ShoppingCartIcon />
						</Link>
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
