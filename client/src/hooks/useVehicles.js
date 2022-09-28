import { setVehicles } from '../redux/features/vehicleSlice';
import vehicleApi from '../api/vehicleApi';
import { useRedux } from './useRedux';
import { useEffect } from 'react';

export const useVehicles = (setLoading, driverId) => {
	const { refreshVehicles, dispatch } = useRedux();

	useEffect(() => {
		const getAllVehicles = async () => {
			try {
				const vehicles = await vehicleApi.getVehiclesByDriver(driverId);
				dispatch(setVehicles(vehicles));
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getAllVehicles();
	}, [refreshVehicles]);
};
