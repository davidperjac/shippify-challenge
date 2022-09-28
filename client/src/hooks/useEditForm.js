import { getNameByID } from '../utils/getNameByID';
import { useRedux } from '../hooks/useRedux';
import { useEffect } from 'react';

export const useEditForm = (form, id) => {
	const { driversNames, vehicles } = useRedux();

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
};
