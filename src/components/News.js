import { Container, Typography } from '@mui/material';
import NewsItem from './NewsItem';
function News() {
	return (
		<>
			<Typography
				sx={{
					fontSize: '2.5rem',
					fontWeight: 'bold',
					textAlign: 'center',
					color: '#0BA5EC',
				}}>
				Latest Podman News
			</Typography>
			<Container
				maxWidth='xl'
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					flexDirection: 'row',
					marginInline: 'auto',
					paddingBlock: '1rem',
				}}>
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</Container>
		</>
	);
}

export default News;
