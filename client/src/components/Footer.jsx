import { Text, Center } from '@mantine/core';

const Footer = () => {
	return (
		<Center
			sx={(theme) => ({
				marginTop: '1rem',
				padding: '1rem',
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[8]
						: theme.colors.gray[2],
			})}
		>
			<Text size="md" weight={700}>
				Powered by David Perez
			</Text>
		</Center>
	);
};

export default Footer;
