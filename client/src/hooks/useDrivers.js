import { setTotalPage } from '../redux/features/paginationSlice';
import { setDriverNames } from '../redux/features/driverSlice';
import { parseDrivers } from '../utils/parseDrivers';
import driverApi from '../api/driverApi';
import { useRedux } from './useRedux';
import { useEffect } from 'react';

export const useDrivers = (setLoading) => {
	const { dispatch, activePage, driverSelected } = useRedux();
	useEffect(() => {
		const getAllDrivers = async () => {
			try {
				const { paginatedDrivers, total } = await driverApi.getAllDrivers(
					activePage
				);
				setLoading(false);
				const labeledDrivers = parseDrivers(paginatedDrivers);
				const filteredDrivers = labeledDrivers.filter((driver) => {
					return driver.value
						.toUpperCase()
						.includes(driverSelected.toUpperCase());
				});
				dispatch(setDriverNames(filteredDrivers));
				dispatch(setTotalPage(Math.ceil(total / 100)));
			} catch (error) {
				console.log(error);
			}
		};
		getAllDrivers();
	}, [activePage, driverSelected]);
};
