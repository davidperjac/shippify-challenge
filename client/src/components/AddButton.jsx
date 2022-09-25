import { MdOutlineAddCircle } from 'react-icons/md';
import { ActionIcon, Tooltip } from '@mantine/core';
import { Link } from 'react-router-dom';

const AddButton = () => {
	return (
		<Tooltip label="Add Vehicle" withArrow>
			<Link to="/add">
				<ActionIcon variant="filled" color="red">
					<MdOutlineAddCircle size={30} />
				</ActionIcon>
			</Link>
		</Tooltip>
	);
};

export default AddButton;
