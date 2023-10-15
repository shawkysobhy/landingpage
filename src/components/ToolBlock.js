import { Box, Typography } from '@mui/material';
import ToolImg from '../assets/tools.jpg';
function ToolBlock() {
	return (
		<Box
			sx={{
				boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
				maxWidth: '240px',
				padding: '30px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				borderRadius: '10px',
			}}>
			<img
				alt='tool logo'
				src={ToolImg}
				width='80px'
				style={{ marginBlock: '32px' }}
			/>
			<Typography sx={{ color: 'black', fontSize: '20px' }}>
				Kind's ability to run local Kubernetes clusters via container nodes
				includes support for Podman
			</Typography>
		</Box>
	);
}

export default ToolBlock;
