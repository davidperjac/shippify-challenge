import { Text, Center } from '@mantine/core';

const Footer = () => {
	return (
		<Center
			sx={(theme) => ({
				padding: '1rem',
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[7]
						: theme.colors.gray[2],
			})}
		>
			<Text
				size="md"
				weight={700}
				sx={(theme) => ({
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[0]
							: theme.colors.gray[8],
				})}
			>
				Powered by David Perez
			</Text>
		</Center>
	);
};

export default Footer;
