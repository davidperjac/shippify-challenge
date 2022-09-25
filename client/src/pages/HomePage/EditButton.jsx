import { setEditedVehicle } from '../../redux/features/vehicleSlice';
import { ActionIcon, Tooltip } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdEdit } from 'react-icons/md';

const EditButton = ({ id }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setEditedVehicle(id));
		navigate('/edit');
	};

	return (
		<Tooltip label="Edit" withArrow>
			<ActionIcon variant="filled" color="blue" onClick={handleClick}>
				<MdEdit size={20} />
			</ActionIcon>
		</Tooltip>
	);
};

export default EditButton;
