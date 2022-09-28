import { Text, Group, Avatar } from '@mantine/core';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Group>
			<Avatar src="/ship.png" radius="xl" />
			<Text
				weight={700}
				component={Link}
				size="lg"
				to="/"
				sx={(theme) => ({
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[0]
							: theme.colors.gray[8],
				})}
			>
				Shippify
			</Text>
		</Group>
	);
};

export default Logo;
