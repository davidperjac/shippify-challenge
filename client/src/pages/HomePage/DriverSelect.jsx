import { setDriverSelected } from '../../redux/features/driverSlice';
import { TextInput, Button, Group } from '@mantine/core';
import { useDrivers } from '../../hooks/useDrivers';
import { BsFillPersonFill } from 'react-icons/bs';
import { useRedux } from '../../hooks/useRedux';
import { useState, useEffect } from 'react';

const DriverSelect = () => {
	const { driverSelected, dispatch } = useRedux();
	const [driverInput, setDriver] = useState(driverSelected);

	const handleChange = (e) => {
		setDriver(e.currentTarget.value);
	};

	const searchDriver = () => {
		dispatch(setDriverSelected(driverInput));
	};

	useEffect(() => {
		if (driverInput === '') {
			dispatch(setDriverSelected(driverInput));
		}
	}, [driverInput]);

	const handleSubmit = (e) => {
		e.preventDefault();
		searchDriver();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Group>
				<TextInput
					value={driverInput}
					onChange={handleChange}
					placeholder="Pick one driver"
					label="Filter Drivers"
					icon={<BsFillPersonFill />}
				/>
				<Button
					type="submit"
					color="red"
					sx={{
						marginTop: '1.5rem',
					}}
					onClick={searchDriver}
				>
					Search
				</Button>
			</Group>
		</form>
	);
};

export default DriverSelect;
