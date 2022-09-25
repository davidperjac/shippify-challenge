import { setRefreshVehicles } from '../../redux/features/vehicleSlice';
import { showNotification } from '@mantine/notifications';
import { ActionIcon, Tooltip } from '@mantine/core';
import vehicleApi from '../../api/vehicleApi';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillCar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

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
