import { ActionIcon, Tooltip } from '@mantine/core';
import { AiFillDelete } from 'react-icons/ai';
import { showNotification } from '@mantine/notifications';
import { AiFillCar } from 'react-icons/ai';

import vehicleApi from '../../api/vehicleApi';
import { useDispatch } from 'react-redux';
import { setRefreshVehicles } from '../../redux/features/vehicleSlice';

const DeleteButton = ({ id }) => {
	const dispatch = useDispatch();
	const handleClick = async () => {
		const res = await vehicleApi.deleteVehicle(id);
		showNotification({
			autoClose: 5000,
			title: 'Congratulations',
			message: res,
			color: 'red',
			icon: <AiFillCar />,
		});
		dispatch(setRefreshVehicles());
	};
	return (
		<Tooltip label="Delete" withArrow>
			<ActionIcon variant="filled" color="red" onClick={handleClick}>
				<AiFillDelete size={20} />
			</ActionIcon>
		</Tooltip>
	);
};

export default DeleteButton;
