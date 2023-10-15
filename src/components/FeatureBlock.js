import { Box, Typography } from '@mui/material';

function FeatureBlock({ heading, children }) {
	return (
		<Box
			elevation={3}
			sx={{
				background: '#f7f6f9',
				padding: '48px',
				margin: '24px',
				textAlign: 'center',
				maxWidth: '80%',
				boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
				borderRadius: '10px',
			}}>
			<Typography
				sx={{
					fontSize: '30px',
					fontWeight: 'bold',
					padding: '8px',
					margin: '0 0 16px 0',
					color: '#0BA5EC',
					textAlign: 'center',
				}}>
				{heading}
			</Typography>
			<Typography
				sx={{
					fontSize: '20px',
					textAlign: 'center',
					margin: 'auto',
					maxWidth: '450px',
          fontWeight:'500',
					color: '#1D2939',
				}}>
				{children}
			</Typography>
		</Box>
	);
}

export default FeatureBlock;
