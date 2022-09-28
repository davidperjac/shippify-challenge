import { getNameByID, getStatusByID } from '../../utils/getNameByID';
import { Group, Badge } from '@mantine/core';
import ActionButtons from './ActionButtons';

const TableBody = ({ vehicles, driversNames }) => {
	const getStatus = (vehicle) => {
		return getStatusByID(vehicle.driver_id, driversNames);
	};

	return (
		<tbody>
			{vehicles.map((vehicle, index) => (
				<tr key={index}>
					<td>{vehicle.id}</td>
					<td>{vehicle.plate}</td>
					<td>{vehicle.model}</td>
					<td>{vehicle.type}</td>
					<td>{vehicle.capacity}</td>
					<td>
						<Badge
							variant="filled"
							color={getStatus(vehicle) === 'active' ? 'green' : 'red'}
						>
							{getStatus(vehicle)}
						</Badge>
					</td>
					<td>
						<Group>{getNameByID(vehicle.driver_id, driversNames)}</Group>
					</td>
					<td>
						<ActionButtons id={vehicle.id} />
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;
