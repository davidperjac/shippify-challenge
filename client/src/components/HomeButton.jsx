import { ActionIcon, Tooltip } from '@mantine/core';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HomeButton = () => {
	return (
		<Tooltip label="Home" withArrow>
			<Link to="/">
				<ActionIcon variant="filled" color="red">
					<AiFillHome size={30} />
				</ActionIcon>
			</Link>
		</Tooltip>
	);
};

export default HomeButton;
