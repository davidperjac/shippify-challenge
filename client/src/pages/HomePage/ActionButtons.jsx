import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
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
