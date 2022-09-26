import { Table, Stack, Loader, Text } from '@mantine/core';
import { useVehicles } from '../../hooks/useVehicles';
import PaginationTable from './PaginationTable';
import { useRedux } from '../../hooks/useRedux';
import DriverSelect from './DriverSelect';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { useState } from 'react';

const HomeTable = () => {
	const { driversNames, vehicles } = useRedux();
	const [loading, setLoading] = useState(true);
	useVehicles(setLoading);
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
							verticalSpacing="md"
							horizontalSpacing="lg"
							sx={(theme) => ({
								marginTop: '1rem',
								width: '85%',
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
