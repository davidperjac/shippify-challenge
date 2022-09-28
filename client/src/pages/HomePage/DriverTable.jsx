import TableLayout from '../../components/TableLayout';
import { useDrivers } from '../../hooks/useDrivers';
import { useRedux } from '../../hooks/useRedux';
import DriverTableBody from './DriverTableBody';
import DriverTableHead from './DriverTableHead';
import PaginationTable from './PaginationTable';
import DriverSelect from './DriverSelect';
import { Loader } from '@mantine/core';
import { useState } from 'react';

const DriverTable = () => {
	const { driversNames } = useRedux();
	const [loading, setLoading] = useState(true);

	useDrivers(setLoading);

	return (
		<>
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
					<TableLayout>
						<DriverTableHead />
						<DriverTableBody driversNames={driversNames} />
					</TableLayout>
					<PaginationTable />
				</>
			)}
		</>
	);
};

export default DriverTable;
