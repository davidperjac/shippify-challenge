import { TextInput, Stack, Button } from '@mantine/core';

const FormLayout = ({ form, handleSubmit }) => {
	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
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
			<TextInput
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
			<Stack>
				<Button type="submit" mt="sm" color="red" m="lg">
					Submit
				</Button>
			</Stack>
		</form>
	);
};

export default FormLayout;
