import { Stack } from '@mantine/core';
import AddForm from './AddForm';

const AddPage = () => {
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
			<AddForm />
		</Stack>
	);
};

export default AddPage;
