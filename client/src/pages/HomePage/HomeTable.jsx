import { Table, Stack } from '@mantine/core';

import vehicleApi from '../../api/vehicleApi';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setVehicles } from '../../redux/features/vehicleSlice';
import PaginationTable from './PaginationTable';
import DriverSelect from './DriverSelect';

import { getNameByID } from '../../utils/getNameByID';

const HomeTable = () => {
	const dispatch = useDispatch();
	const { activePage } = useSelector((state) => state.pagination);
	// const vehicles = useSelector((state) => state.vehicle.vehicles);

	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		const getAllVehicles = async () => {
			try {
				const res = await vehicleApi.getAllVehicles();
				const limitedVehicles = res.slice(
					activePage * 100 - 100,
					activePage * 100
				);
				console.log(res);
				setVehicles(limitedVehicles);
				// dispatch(setVehicles(res));
			} catch (error) {
				console.log(error);
			}
		};
		getAllVehicles();
	}, [activePage]);

	return (
		<Stack
			sx={{
				marginTop: '3rem',
			}}
			spacing="xl"
			align="center"
		>
			<DriverSelect />
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
						<th>ID</th>
						<th>Plate</th>
						<th>Model</th>
						<th>Type</th>
						<th>Capacity</th>
						<th>Driver</th>
					</tr>
				</thead>
				<tbody>
					{vehicles.map((vehicle, index) => (
						<tr key={index}>
							<td>{vehicle.id}</td>
							<td>{vehicle.plate}</td>
							<td>{vehicle.model}</td>
							<td>{vehicle.type}</td>
							<td>{vehicle.capacity}</td>
							<td>{vehicle.driver_id}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<PaginationTable />
		</Stack>
	);
};

export default HomeTable;
