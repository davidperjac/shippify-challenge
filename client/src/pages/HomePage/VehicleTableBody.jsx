import ActionButtons from './ActionButtons';

const VehicleTableBody = ({ vehicles }) => {
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
						<ActionButtons id={vehicle.id} />
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default VehicleTableBody;
