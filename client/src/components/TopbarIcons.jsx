import ThemeButton from './ThemeButton';
import { Group } from '@mantine/core';
import AddButton from './AddButton';

const TopbarIcons = () => {
	return (
		<Group>
			<AddButton />
			<ThemeButton />
		</Group>
	);
};

export default TopbarIcons;
