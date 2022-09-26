import { useFormVehicle } from '../../hooks/useFormVehicle';
import { TextInput, Stack, Button } from '@mantine/core';
import { getNameByID } from '../../utils/getNameByID';
import { useRedux } from '../../hooks/useRedux';
import { useEffect } from 'react';

const EditForm = ({ id, setOpened }) => {
	const { driversNames, vehicles } = useRedux();
	const { form, handleEditSubmit } = useFormVehicle(setOpened, id);

	useEffect(() => {
		const getVehicleData = () => {
			const res = vehicles.filter((v) => v.id === id)[0];
			form.setValues({
				plate: res.plate,
				model: res.model,
				type: res.type,
				capacity: res.capacity,
				driverName: getNameByID(res.driver_id, driversNames),
			});
		};
		getVehicleData();
	}, []);

	return (
		<form onSubmit={form.onSubmit(handleEditSubmit)}>
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

export default EditForm;
