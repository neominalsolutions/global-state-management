import { Box, Container } from '@mui/material';
import MyAppBar from './components/appbar';
import { Outlet } from 'react-router';

function MainLayout() {
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
