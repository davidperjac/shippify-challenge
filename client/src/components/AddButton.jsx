import { ActionIcon, Tooltip, Modal } from '@mantine/core';
import { MdOutlineAddCircle } from 'react-icons/md';
import AddForm from '../components/AddForm';
import { useState } from 'react';

const AddButton = () => {
	const [opened, setOpened] = useState(false);

	const handleClick = () => {
		setOpened(true);
	};

	return (
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Create a vehicle!"
			>
				<AddForm setOpened={setOpened} />
			</Modal>
			<Tooltip label="Add Vehicle" withArrow>
				<ActionIcon variant="filled" color="red" onClick={handleClick}>
					<MdOutlineAddCircle size={30} />
				</ActionIcon>
			</Tooltip>
		</>
	);
};

export default AddButton;
