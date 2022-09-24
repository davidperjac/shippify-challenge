import { Table, Stack, Loader, Text } from '@mantine/core';

import vehicleApi from '../../api/vehicleApi';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
	setVehicles,
	setRefreshVehicles,
} from '../../redux/features/vehicleSlice';
import { setTotalPage } from '../../redux/features/paginationSlice';
import PaginationTable from './PaginationTable';
import DriverSelect from './DriverSelect';
import ActionButtons from './ActionButtons';

import { getNameByID } from '../../utils/getNameByID';

const HomeTable = () => {
	const dispatch = useDispatch();
	const { activePage } = useSelector((state) => state.pagination);
	const vehicles = useSelector((state) => state.vehicle.vehicles);
	const refreshVehicles = useSelector((state) => state.vehicle.refreshVehicles);
	const driversNames = useSelector((state) => state.driver.driversNames);
	const driverSelected = useSelector((state) => state.driver.driverSelected);

	const [loading, setLoading] = useState(true);

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

	return (
		<Stack
			sx={{
				marginTop: '3rem',
			}}
			spacing="xl"
			align="center"
		>
			<DriverSelect />
			{loading ? (
				<Loader
					color="red"
					variant="bars"
					sx={{
						padding: '14rem',
						marginBottom: '6rem',
					}}
				/>
			) : (
				<>
					{vehicles.length === 0 ? (
						<Text
							weight={700}
							sx={(theme) => ({
								padding: '14rem',
								marginBottom: '1rem',
								color:
									theme.colorScheme === 'dark'
										? theme.colors.dark[0]
										: theme.colors.gray[8],
							})}
						>
							No vehicles available
						</Text>
					) : (
						<Table
							sx={(theme) => ({
								marginTop: '1rem',
								width: '60%',
								border: `2px solid ${
									theme.colorScheme === 'dark'
										? theme.colors.dark[8]
										: theme.colors.gray[2]
								}`,
							})}
							striped
							highlightOnHover
						>
							{driversNames.length > 0 && (
								<>
									<thead>
										<tr>
											<th>ID</th>
											<th>Plate</th>
											<th>Model</th>
											<th>Type</th>
											<th>Capacity</th>
											<th>Driver</th>
											<th>Actions</th>
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
												<td>{getNameByID(vehicle.driver_id, driversNames)}</td>
												<td>
													<ActionButtons id={vehicle.id} />
												</td>
											</tr>
										))}
									</tbody>
								</>
							)}
						</Table>
					)}

					<PaginationTable />
				</>
			)}
		</Stack>
	);
};

export default HomeTable;
