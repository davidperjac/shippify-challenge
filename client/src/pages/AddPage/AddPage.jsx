import FormLayout from '../FormLayout/FormLayout';
import { Text, Center } from '@mantine/core';
import AddForm from './AddForm';

const AddPage = () => {
	return (
		<FormLayout>
			<Center>
				<Text
					weight={500}
					size="lg"
					sx={(theme) => ({
						color:
							theme.colorScheme === 'dark'
								? theme.colors.dark[0]
								: theme.colors.gray[8],
					})}
				>
					Create a Vehicle
				</Text>
			</Center>
			<AddForm />
		</FormLayout>
	);
};

export default AddPage;
