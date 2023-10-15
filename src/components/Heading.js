import { Typography, Box, Container } from '@mui/material';
import HeaderImg from '../assets/header.png';
import CusteomButton from './CusteomButton';
import { useTheme } from '@mui/material';
const styles = {
	heading: {
		color: 'white',
		fontSize: '48px',
		fontWeight: 'bold',
		marginBottom: '1rem',
	},
};
function Heading() {
	const theme = useTheme();
	const med = theme.breakpoints.down(1000);
	return (
		<Container
			maxWidth='xl'
			sx={{
				background: (theme) => theme.palette.background.paper,
				paddingBottom: '2rem',
			}}>
			<Box
				marginInline='auto'
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					gap: '20px',
					[med]: {
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
					},
				}}>
				<Box
					sx={{
						padding: '10px',
						maxWidth: '600px',
						paddingTop: '4rem',
						[med]: {
							paddingBlock: '1rem',
						},
					}}>
					<Typography sx={styles.heading}>
						The best free & open source container tools
					</Typography>
					<Typography variant='body1' sx={{ fontSize: '20px' }}>
						Manage containers, pods, and images with Podman. Seamlessly work
						with containers and Kubernetes from your local environment.
					</Typography>
						<Box
							sx={{
								marginBlock: '1rem',
								display: 'flex',
								gap: '1rem',
								
								margin: '1rem auto 0',
								[med]: {
									flexDirection: 'column',
									alignItems: 'center',
								},
							}}>
							<CusteomButton txt={'Get Started'} />
							<CusteomButton txt={'Learn More'} />
						</Box>
				</Box>
				<Box
					sx={{
						alignSelf: 'end',
						// background:'red',
						[med]: {
							paddingTop: '2rem',
							justifySelf: 'flex-end',
							display: 'flex',
						},
					}}>
					<Box
						component='img'
						src={HeaderImg}
						alt='banner'
						sx={{
							margin: 'auto',

							width: '90%',
							marginTop: '5rem',

						}}
					/>
				</Box>
			</Box>
		</Container>
	);
}

export default Heading;
