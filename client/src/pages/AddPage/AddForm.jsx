import { useForm } from '@mantine/form';
import { TextInput, NumberInput, Stack, Button } from '@mantine/core';

const AddForm = () => {
	const form = useForm({
		initialValues: {
			plate: '',
			model: '',
			type: '',
			capacity: '',
			driverName: '',
			driverLastName: '',
		},
		validate: {
			plate: (value) => (value.length < 1 ? 'Plate can not be empty' : null),
			model: (value) => (value.length < 1 ? 'Model can not be empty' : null),
			type: (value) => (value.length < 1 ? 'Type can not be empty' : null),
			capacity: (value) => (value < 1 ? 'Capacity must be at least 1' : null),
			driverName: (value) =>
				value.length < 2 ? 'Driver Name not in records' : null,
			driverLastName: (value) =>
				value.length < 2 ? 'Driver Last Name not in records' : null,
		},
	});
	return (
		<form onSubmit={form.onSubmit(console.log)}>
			<TextInput
				size="md"
				m="lg"
				label="Plate"
				placeholder="Plate"
				{...form.getInputProps('plate')}
			/>
			<TextInput
				size="md"
				m="lg"
				label="Model"
				placeholder="Model"
				{...form.getInputProps('model')}
			/>
			<TextInput
				size="md"
				m="lg"
				label="Type"
				placeholder="Type"
				{...form.getInputProps('type')}
			/>
			<NumberInput
				size="md"
				m="lg"
				label="Capacity"
				placeholder="Capacity"
				{...form.getInputProps('capacity')}
			/>
			<TextInput
				size="md"
				m="lg"
				label="Driver Name"
				placeholder="Driver Name"
				{...form.getInputProps('driverName')}
			/>
			<TextInput
				size="md"
				m="lg"
				label="Driver Last Name"
				placeholder="Driver Last Name"
				{...form.getInputProps('driverLastName')}
			/>
			<Stack>
				<Button type="submit" mt="sm" color="red" m="lg">
					Submit
				</Button>
			</Stack>
		</form>
	);
};

export default AddForm;
