import { Text, Grid, Group } from '@mantine/core';
import ThemeButton from './ThemeButton';
import { Avatar } from '@mantine/core';

const Topbar = () => {
	return (
		<Grid
			justify="space-around"
			align="center"
			sx={(theme) => ({
				padding: '0.6rem',
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[8]
						: theme.colors.gray[2],
			})}
		>
			<Group>
				<Avatar src="/ship.png" radius="xl" />
				<Text weight={700} size="lg">
					Shippify
				</Text>
			</Group>

			<ThemeButton />
		</Grid>
	);
};

export default Topbar;
