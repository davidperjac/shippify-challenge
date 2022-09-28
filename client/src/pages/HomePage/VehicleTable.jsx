import TableLayout from '../../components/TableLayout';
import { useVehicles } from '../../hooks/useVehicles';
import VehicleTableBody from './VehicleTableBody';
import VehicleTableHead from './VehicleTableHead';
import { useRedux } from '../../hooks/useRedux';
import { useParams } from 'react-router-dom';
import { Loader } from '@mantine/core';
import { useState } from 'react';

const VehicleTable = () => {
	const { vehicles } = useRedux();
	const { driverId } = useParams();
	const [loading, setLoading] = useState(true);

	useVehicles(setLoading, driverId);

	return (
		<>
			{loading ? (
				<Loader
					color="red"
					sx={{
						padding: '14rem',
						marginBottom: '6rem',
					}}
				/>
			) : (
				<TableLayout>
					<VehicleTableHead />
					<VehicleTableBody vehicles={vehicles} />
				</TableLayout>
			)}
		</>
	);
};

export default VehicleTable;
