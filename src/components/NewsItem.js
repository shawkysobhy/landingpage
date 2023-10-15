import { Box, Link, Typography } from '@mui/material';
import NewsImg from '../assets/news.png';
import {useTheme} from '@mui/material';

function NewsItem() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				maxWidth: '330px',
				display: 'flex',
				flexDirection: 'column',
				padding: '16px',
				color: 'black',
				marginBlock: '16px',
			}}>
			<img alt='news' src={NewsImg} width='330px' />
			<Link
				sx={{
					background: '#0BA5EC',
					padding: '15px',
					textDecoration: 'none',
					color: 'white',
					fontWeight: 'bold',
					marginTop: '16px',
				}}>
				Why does SELinux container policy allow all Linux capabilities?
			</Link>
			<Typography
				sx={{
					fontSize: '20px',
					fontWeight: '500',
					color: theme.palette.primary.contrastText,
				}}>
				I recently had a discussion in a container-selinux issue on why we allow
				certain capabilities by default for containers. The conversation is
				around DAC_OVERRIDE, a Linux capability which allows privileged
				processes, usually...
			</Typography>
		</Box>
	);
}

export default NewsItem;
