import { Link } from '@mui/material';
function NavItems({ label, link = '#' }) {
	return (
		<Link
			href={link}
			sx={{
				padding: '4px 12px',
				fontSize: '1.5rem',
				textDecoration: 'none',
				color: 'white',
			}}
			color='inherit'>
			{label}
		</Link>
	);
}

export default NavItems;
