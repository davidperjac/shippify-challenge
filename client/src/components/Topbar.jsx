import TopbarIcons from './TopbarIcons';
import { Grid } from '@mantine/core';
import Logo from './Logo';

const Topbar = () => {
	return (
		<Grid
			justify="space-around"
			align="center"
			sx={(theme) => ({
				width: '100%',
				padding: '0.6rem',
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[7]
						: theme.colors.gray[2],
			})}
		>
			<Logo />
			<TopbarIcons />
		</Grid>
	);
};

export default Topbar;
