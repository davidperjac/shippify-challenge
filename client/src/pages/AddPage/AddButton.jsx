import { MdOutlineAddCircle } from 'react-icons/md';
import { ActionIcon, Tooltip } from '@mantine/core';

const AddButton = () => {
	return (
		<Tooltip label="Add Vehicle" withArrow>
			<ActionIcon variant="filled" color="red">
				<MdOutlineAddCircle size={30} />
			</ActionIcon>
		</Tooltip>
	);
};

export default AddButton;
