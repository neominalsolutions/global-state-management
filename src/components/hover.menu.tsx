/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const LayoutWithHoverMenu = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleMouseEnter = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMouseLeave = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ height: '100vh', position: 'relative' }}>
			{/* Sağ ortada hover menü */}
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					right: 0,
					transform: 'translateY(-50%)',
					zIndex: 1300,
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<IconButton>
					<MoreVertIcon />
				</IconButton>

				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={handleMouseLeave}
					MenuListProps={{
						onMouseLeave: handleMouseLeave,
						sx: { pointerEvents: 'auto' },
					}}
					anchorOrigin={{
						vertical: 'center',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'center',
						horizontal: 'right',
					}}
				>
					<MenuItem onClick={() => alert('Seçenek 1')}>Seçenek 1</MenuItem>
					<MenuItem onClick={() => alert('Seçenek 2')}>Seçenek 2</MenuItem>
					<MenuItem onClick={() => alert('Seçenek 3')}>Seçenek 3</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
};

export default LayoutWithHoverMenu;
