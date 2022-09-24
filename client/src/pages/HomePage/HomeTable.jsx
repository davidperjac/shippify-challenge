import { Table, Stack, Select, Center } from '@mantine/core';
import vehicleApi from '../../api/vehicleApi';
import { useEffect, useState } from 'react';
import driverApi from '../../api/driverApi';

const HomeTable = () => {
	const [vehicles, setVehicles] = useState([]);
	const [drivers, setDrivers] = useState([]);
	const [driverSearched, setDriverSearched] = useState([]);

	const data = [
		{ value: 'react', label: 'React' },
		{ value: 'ng', label: 'Angular' },
		{ value: 'svelte', label: 'Svelte' },
		{ value: 'vue', label: 'Vue' },
		{ value: 'riot', label: 'Riot' },
		{ value: 'next', label: 'Next.js' },
		{ value: 'blitz', label: 'Blitz.js' },
	];

	useEffect(() => {
		const getAllVehicles = async () => {
			try {
				const res = await vehicleApi.getAllVehicles();
				setVehicles(res);
			} catch (error) {
				console.log(error);
			}
		};
		getAllVehicles();
	}, []);

	useEffect(() => {
		const getAllDrivers = async () => {
			try {
				const res = await driverApi.getAllDrivers();
				console.log(res);
			} catch (error) {
				console.log(error);
			}
		};
		getAllDrivers();
	}, []);

	return (
		<Stack
			sx={{
				marginTop: '3rem',
			}}
			spacing="xl"
			align="center"
		>
			<Select
				allowDeselect
				data={data}
				searchValue={driverSearched}
				onSearchChange={setDriverSearched}
				label="Filter Vehicles"
				placeholder="Pick one driver"
			/>
			<Table
				sx={(theme) => ({
					width: '70%',
					marginTop: '1rem',
					alignSelf: 'center',
					border: `2px solid ${
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[2]
					}`,
				})}
				striped
				highlightOnHover
			>
				<thead>
					<tr>
						<th>Plate</th>
						<th>Model</th>
						<th>Type</th>
						<th>Capacity</th>
						<th>Driver</th>
					</tr>
				</thead>
				<tbody>
					{/* {vehicles.map((vehicle) => (
						<tr key={vehicle.driver_id}>
							<td>{vehicle.plate}</td>
							<td>{vehicle.model}</td>
							<td>{vehicle.type}</td>
							<td>{vehicle.capacity}</td>
							<td>{vehicle.driver_id}</td>
						</tr>
					))} */}
				</tbody>
			</Table>
		</Stack>
	);
};

export default HomeTable;
