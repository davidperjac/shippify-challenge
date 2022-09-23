import { MdOutlineLightMode } from 'react-icons/md';
import { ActionIcon, Tooltip } from '@mantine/core';

const ThemeButton = () => {
	return (
		<Tooltip label="Theme" withArrow>
			<ActionIcon variant="filled" color="red">
				<MdOutlineLightMode size={30} />
			</ActionIcon>
		</Tooltip>
	);
};

export default ThemeButton;
