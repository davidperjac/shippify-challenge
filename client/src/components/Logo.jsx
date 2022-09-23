import { Text, Group, Avatar } from '@mantine/core';

const Logo = () => {
	return (
		<Group>
			<Avatar src="/ship.png" radius="xl" />
			<Text
				weight={700}
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
