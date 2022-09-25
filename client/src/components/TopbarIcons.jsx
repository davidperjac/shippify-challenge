import ThemeButton from './ThemeButton';
import { Group } from '@mantine/core';
import HomeButton from './HomeButton';
import AddButton from './AddButton';

const TopbarIcons = () => {
	return (
		<Group>
			<HomeButton />
			<AddButton />
			<ThemeButton />
		</Group>
	);
};

export default TopbarIcons;
