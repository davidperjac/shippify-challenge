import { setRefreshVehicles } from '../redux/features/vehicleSlice';
import { showNotification } from '@mantine/notifications';
import { getIDbyName } from '../utils/getNameByID.js';
import { useNotification } from './useNotification';
import vehicleApi from '../api/vehicleApi';
import { AiFillCar } from 'react-icons/ai';
import { useForm } from '@mantine/form';
import { useRedux } from './useRedux';

export const useFormVehicle = (setOpened, id) => {
	const { driversNames, dispatch } = useRedux();

	const getVehicle = (values) => {
		return {
			...values,
			driverId: getIDbyName(values.driverName, driversNames),
		};
	};

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

	const handleAddSubmit = async (values) => {
		setOpened(false);
		const vehicle = getVehicle(values);
		const res = await vehicleApi.createVehicle(vehicle);
		useNotification(res);
		dispatch(setRefreshVehicles());
	};

	const handleEditSubmit = async (values) => {
		setOpened(false);
		const vehicle = getVehicle(values);
		const res = await vehicleApi.updateVehicle(vehicle, id);
		useNotification(res);
		dispatch(setRefreshVehicles());
	};
	return { form, handleAddSubmit, handleEditSubmit };
};
