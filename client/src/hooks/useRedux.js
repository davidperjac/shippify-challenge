import { useDispatch, useSelector } from 'react-redux';

export const useRedux = () => {
	const refreshVehicles = useSelector((state) => state.vehicle.refreshVehicles);
	const driverSelected = useSelector((state) => state.driver.driverSelected);
	const driversNames = useSelector((state) => state.driver.driversNames);
	const activePage = useSelector((state) => state.pagination.activePage);
	const vehicles = useSelector((state) => state.vehicle.vehicles);
	const total = useSelector((state) => state.pagination.total);
	const darkMode = useSelector((state) => state.theme.value);
	const dispatch = useDispatch();
	return {
		refreshVehicles,
		driverSelected,
		driversNames,
		activePage,
		vehicles,
		darkMode,
		dispatch,
		total,
	};
};
