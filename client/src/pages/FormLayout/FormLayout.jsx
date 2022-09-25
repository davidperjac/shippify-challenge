import { Stack } from '@mantine/core';

const FormLayout = (props) => {
	return (
		<Stack
			sx={(theme) => ({
				width: '35%',
				height: '100%',
				alignSelf: 'center',
				padding: '1rem',
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[6]
						: theme.colors.gray[2],
				borderRadius: theme.radius.md,
				marginTop: '4rem',
				marginBottom: '5rem',
			})}
		>
			{props.children}
		</Stack>
	);
};

export default FormLayout;
