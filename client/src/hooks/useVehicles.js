import { setTotalPage } from '../redux/features/paginationSlice';
import { setVehicles } from '../redux/features/vehicleSlice';
import vehicleApi from '../api/vehicleApi';
import { useRedux } from './useRedux';
import { useEffect } from 'react';

export const useVehicles = (setLoading) => {
	const {
		refreshVehicles,
		driverSelected,
		driversNames,
		activePage,
		dispatch,
	} = useRedux();

	useEffect(() => {
		const getAllVehicles = async () => {
			try {
				if (driversNames.length > 0) {
					const res = await vehicleApi.getAllVehicles();

					const filteredNames = driversNames.filter((driver) => {
						return driver.value
							.toUpperCase()
							.includes(driverSelected.toUpperCase());
					});

					const filteredVehicles = res.filter((vehicle) => {
						for (const driver of filteredNames) {
							if (driver.id === vehicle.driver_id) {
								return vehicle;
							}
						}
					});

					const limitedVehicles = filteredVehicles.slice(
						activePage * 100 - 100,
						activePage * 100
					);

					dispatch(setVehicles(limitedVehicles));
					dispatch(setTotalPage(Math.ceil(filteredVehicles.length / 100)));
					setLoading(false);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getAllVehicles();
	}, [activePage, driverSelected, driversNames, refreshVehicles]);
};
