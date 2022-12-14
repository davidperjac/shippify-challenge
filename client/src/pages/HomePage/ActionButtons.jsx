import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { Group } from '@mantine/core';

const ActionButtons = ({ id }) => {
	return (
		<Group>
			<EditButton id={id} />
			<DeleteButton id={id} />
		</Group>
	);
};

export default ActionButtons;
