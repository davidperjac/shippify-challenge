import { getNameByID, getStatusByID } from '../../utils/getNameByID';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mantine/core';

const DriverTableBody = ({ driversNames }) => {
	const navigate = useNavigate();

	return (
		<tbody>
			{driversNames.map((driver, index) => (
				<tr key={index} onClick={() => navigate('/' + driver.id)}>
					<td>{driver.id}</td>
					<td>{getNameByID(driver.id, driversNames)}</td>
					<td>{driver.email}</td>
					<td>{driver.phone}</td>
					<td>
						<Badge
							variant="filled"
							color={
								getStatusByID(driver.id, driversNames) === 'active'
									? 'green'
									: 'red'
							}
						>
							{getStatusByID(driver.id, driversNames)}
						</Badge>
					</td>
					{/* <td>{driver.company}</td> */}
				</tr>
			))}
		</tbody>
	);
};

export default DriverTableBody;
