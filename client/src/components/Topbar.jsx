import { Grid } from '@mantine/core';
import Icons from './Icons';
import Logo from './Logo';

const Topbar = () => {
	return (
		<Grid
			justify="space-around"
			align="center"
			sx={(theme) => ({
				padding: '0.6rem',
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[7]
						: theme.colors.gray[2],
			})}
		>
			<Logo />
			<Icons />
		</Grid>
	);
};

export default Topbar;
