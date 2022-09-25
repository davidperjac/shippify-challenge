import { ActionIcon, Tooltip, Modal } from '@mantine/core';
import EditForm from '../EditPage/EditForm';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';

const EditButton = ({ id }) => {
	const [opened, setOpened] = useState(false);

	const handleClick = () => {
		setOpened(true);
	};

	return (
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Edit a vehicle!"
			>
				<EditForm id={id} setOpened={setOpened} />
			</Modal>
			<Tooltip label="Edit" withArrow>
				<ActionIcon variant="filled" color="blue" onClick={handleClick}>
					<MdEdit size={20} />
				</ActionIcon>
			</Tooltip>
		</>
	);
};

export default EditButton;
