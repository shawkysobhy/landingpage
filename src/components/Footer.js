import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import FooterItems from './FooterItems';
const Footer = () => {
	return (
		<footer>
			<Container
				maxWidth='100%'
				sx={{
					color: '#0BA5EC',
					background: '#1D2939',
					alignItems: 'center',
					paddingBottom: '20px',
				}}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<Typography
							sx={{ padding: '1rem', fontWeight: 'bold', color: 'white' }}
							variant='h6'>
							Docs
						</Typography>
						<FooterItems txt='Installation Instructions' />
						<FooterItems txt='Documentation' />
						<FooterItems txt={'Podman CLI Commands'} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography
							sx={{ padding: '1rem', fontWeight: 'bold', color: 'white' }}
							variant='h6'>
							Community
						</Typography>
						<FooterItems txt='Discord' />
						<FooterItems txt='Blog' />
						<FooterItems txt='Mailing List' />
						<FooterItems txt='RSS Feed' />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography
							sx={{ padding: '1rem', fontWeight: 'bold', color: 'white' }}
							variant='h6'>
							Projects
						</Typography>
						<FooterItems txt='Podman GitHub' />
						<FooterItems txt='Podman Desktop GitHub' />
						<FooterItems txt='Podman Desktop Website' />
						<FooterItems txt='Podman Website GitHub' />
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
};

export default Footer;
