import { Link } from '@mui/material';
function FooterItems({ txt, link }) {
	return (
		<Link
			href={link}
			sx={{
				display: 'block',
				padding: '1rem',
				fontWeight: 'bold',
				color: '#0BA5EC',
        textDecoration:'none',
			}}>
			{txt}
		</Link>
	);
}

export default FooterItems;
