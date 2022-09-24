import { BsFillPersonFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { Select } from '@mantine/core';
import { setDriverNames } from '../../redux/features/driverSlice';
import { useDispatch, useSelector } from 'react-redux';

import driverApi from '../../api/driverApi';
import { capitalize } from '../../utils/capitalize';

const DriverSelect = () => {
	const [drivers, setDrivers] = useState([]);
	const [driverSearched, setDriverSearched] = useState([]);
	// const drivers = useSelector((state) => state.driver.driversNames);

	useEffect(() => {
		const getAllDrivers = async () => {
			try {
				const res = await driverApi.getAllDrivers();
				const labeledDrivers = res.map((driver) => {
					const container = {
						label: '',
						value: '',
						status: '',
						id: 0,
					};
					container.label =
						capitalize(driver.first_name) +
						' ' +
						capitalize(driver.last_name) +
						' ' +
						driver.id;
					container.value = container.label + ' ' + driver.id;
					container.status = driver.status;
					container.id = driver.id;
					return container;
				});
				setDrivers(labeledDrivers);
				// dispatch(setDriverNames(labeledDrivers));
			} catch (error) {
				console.log(error);
			}
		};
		getAllDrivers();
	}, []);

	return (
		<Select
			label="Filter Vehicles"
			placeholder="Pick one driver"
			icon={<BsFillPersonFill />}
			data={drivers}
			maxDropdownHeight={400}
			searchValue={driverSearched}
			onSearchChange={setDriverSearched}
			nothingFound="Nobody here"
		/>
	);
};

export default DriverSelect;
