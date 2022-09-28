import ThemeButton from './ThemeButton';
import { Group } from '@mantine/core';
import AddButton from './AddButton';
import GitHubButton from './GitHubButton';

const TopbarIcons = () => {
	return (
		<Group>
			<AddButton />
			<ThemeButton />
			<GitHubButton />
		</Group>
	);
};

export default TopbarIcons;
