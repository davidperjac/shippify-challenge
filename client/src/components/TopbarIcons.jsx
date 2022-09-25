import ThemeButton from './ThemeButton';
import { Group } from '@mantine/core';
import TableButton from './TableButton';
import AddButton from './AddButton';

const TopbarIcons = () => {
	return (
		<Group>
			<TableButton />
			<AddButton />
			<ThemeButton />
		</Group>
	);
};

export default TopbarIcons;
