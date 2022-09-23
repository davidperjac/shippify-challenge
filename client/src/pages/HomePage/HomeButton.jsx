import { AiFillHome } from 'react-icons/ai';
import { ActionIcon, Tooltip } from '@mantine/core';

const HomeButton = () => {
	return (
		<Tooltip label="Home" withArrow>
			<ActionIcon variant="filled" color="red">
				<AiFillHome size={30} />
			</ActionIcon>
		</Tooltip>
	);
};

export default HomeButton;
