import { setDriverSelected } from '../../redux/features/driverSlice';
import { TextInput, Button, Group } from '@mantine/core';
import { BsFillPersonFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DriverSelect = () => {
	const driverSelected = useSelector((state) => state.driver.driverSelected);
	const [driver, setDriver] = useState(driverSelected);
	const dispatch = useDispatch();

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
