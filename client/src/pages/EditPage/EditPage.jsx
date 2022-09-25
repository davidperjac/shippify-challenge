import FormLayout from '../FormLayout/FormLayout';
import { Text, Center } from '@mantine/core';
import EditForm from './EditForm';

const EditPage = () => {
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
					Edit a Vehicle
				</Text>
			</Center>
			<EditForm />
		</FormLayout>
	);
};

export default EditPage;
