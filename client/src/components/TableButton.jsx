import { ActionIcon, Tooltip } from '@mantine/core';
import { BiTable } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const TableButton = () => {
	return (
		<Tooltip label="Table" withArrow>
			<Link to="/">
				<ActionIcon variant="filled" color="red">
					<BiTable size={30} />
				</ActionIcon>
			</Link>
		</Tooltip>
	);
};

export default TableButton;
