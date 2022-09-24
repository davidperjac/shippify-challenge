import { ActionIcon, Tooltip } from '@mantine/core';
import { MdEdit } from 'react-icons/md';

const EditButton = () => {
	return (
		<Tooltip label="Edit" withArrow>
			<ActionIcon variant="filled" color="blue">
				<MdEdit size={20} />
			</ActionIcon>
		</Tooltip>
	);
};

export default EditButton;
