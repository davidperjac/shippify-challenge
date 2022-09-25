import { setTotalPage } from '../../redux/features/paginationSlice';
import { setVehicles } from '../../redux/features/vehicleSlice';
import { Table, Stack, Loader, Text } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import PaginationTable from './PaginationTable';
import vehicleApi from '../../api/vehicleApi';
import { useEffect, useState } from 'react';
import DriverSelect from './DriverSelect';
import TableHead from './TableHead';
import TableBody from './TableBody';

const HomeTable = () => {
	const refreshVehicles = useSelector((state) => state.vehicle.refreshVehicles);
	const driverSelected = useSelector((state) => state.driver.driverSelected);
	const driversNames = useSelector((state) => state.driver.driversNames);
	const activePage = useSelector((state) => state.pagination.activePage);
	const vehicles = useSelector((state) => state.vehicle.vehicles);

	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

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
									<TableHead />
									<TableBody vehicles={vehicles} driversNames={driversNames} />
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
