import { BsFillPersonFill } from 'react-icons/bs';

import {
	setDriverNames,
	setDriverSelected,
} from '../../redux/features/driverSlice';
import { useDispatch } from 'react-redux';

import driverApi from '../../api/driverApi';
import { capitalize } from '../../utils/capitalize';

import { TextInput, Button, Group } from '@mantine/core';
import { useState, useEffect } from 'react';

const DriverSelect = () => {
	const dispatch = useDispatch();
	const [driver, setDriver] = useState('');

	const handleChange = (e) => {
		setDriver(e.currentTarget.value);
	};

	useEffect(() => {
		if (driver === '') {
			dispatch(setDriverSelected(driver));
		}
	}, [driver]);

	const searchDriver = () => {
		dispatch(setDriverSelected(driver));
	};

	useEffect(() => {
		const getAllDrivers = async () => {
			try {
				const res = await driverApi.getAllDrivers();
				const labeledDrivers = res.map((driver) => {
					const container = {
						value: '',
						status: '',
						id: 0,
					};
					container.value =
						capitalize(driver.first_name) + ' ' + capitalize(driver.last_name);
					container.status = driver.status;
					container.id = driver.id;
					return container;
				});
				dispatch(setDriverNames(labeledDrivers));
			} catch (error) {
				console.log(error);
			}
		};
		getAllDrivers();
	}, []);

	return (
		<Group>
			<TextInput
				value={driver}
				onChange={handleChange}
				placeholder="Pick one driver"
				label="Filter Vehicles"
				icon={<BsFillPersonFill />}
			/>
			<Button
				color="red"
				sx={{
					marginTop: '1.5rem',
				}}
				onClick={searchDriver}
			>
				Search
			</Button>
		</Group>
	);
};

export default DriverSelect;
