import { Text, Group, Avatar } from '@mantine/core';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Group>
			<Link to="/">
				<Avatar src="/ship.png" radius="xl" />
			</Link>
			<Text
				weight={700}
				to="/"
				component={Link}
				size="lg"
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
