import { setDriverNames } from '../redux/features/driverSlice';
import { useDispatch } from 'react-redux';
import driverApi from '../api/driverApi';
import { useEffect } from 'react';
import { parseDrivers } from '../utils/parseDrivers';

export const useDrivers = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getAllDrivers = async () => {
			try {
				const res = await driverApi.getAllDrivers();
				const labeledDrivers = parseDrivers(res);
				dispatch(setDriverNames(labeledDrivers));
			} catch (error) {
				console.log(error);
			}
		};
		getAllDrivers();
	}, []);
};
