import { setRefreshVehicles } from '../../redux/features/vehicleSlice';
import { showNotification } from '@mantine/notifications';
import { TextInput, Stack, Button } from '@mantine/core';
import { getIDbyName } from '../../utils/getNameByID.js';
import { useSelector, useDispatch } from 'react-redux';
import { getNameByID } from '../../utils/getNameByID';
import { useNavigate } from 'react-router-dom';
import vehicleApi from '../../api/vehicleApi';
import { AiFillCar } from 'react-icons/ai';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';

const EditForm = ({ id, setOpened }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const driversNames = useSelector((state) => state.driver.driversNames);

	const form = useForm({
		initialValues: {
			plate: '',
			model: '',
			type: '',
			capacity: '',
			driverName: '',
		},
		validate: {
			plate: (value) => (value.length < 1 ? 'Plate cannot be empty' : null),
			model: (value) => (value.length < 1 ? 'Model cannot be empty' : null),
			type: (value) => (value.length < 1 ? 'Type cannot be empty' : null),
			capacity: (value) =>
				value.length < 2 ? 'Capacity cannot be empty' : null,
			driverName: (value) =>
				!driversNames.some((driver) => driver.value === value)
					? 'Driver Name not in records'
					: null,
		},
	});

	useEffect(() => {
		if (id) {
			const getVehicleData = async () => {
				const res = await vehicleApi.getVehicle(id);
				form.setValues({
					plate: res.plate,
					model: res.model,
					type: res.type,
					capacity: res.capacity,
					driverName: getNameByID(res.driver_id, driversNames),
				});
			};
			getVehicleData();
		} else {
			navigate('/');
		}
	}, []);

	const handleSubmit = async (values) => {
		const vehicle = {
			...values,
			driverId: getIDbyName(values.driverName, driversNames),
		};
		const res = await vehicleApi.updateVehicle(vehicle, id);
		showNotification({
			autoClose: 5000,
			title: 'Congratulations',
			message: res,
			color: 'red',
			icon: <AiFillCar />,
		});
		setOpened(false);
		dispatch(setRefreshVehicles());
	};

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

export default EditForm;
