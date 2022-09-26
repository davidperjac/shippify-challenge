import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { setTheme } from '../redux/features/themeSlice';
import { ActionIcon, Tooltip } from '@mantine/core';
import { useRedux } from '../hooks/useRedux';

const ThemeButton = () => {
	const { dispatch, darkMode } = useRedux();

	const handleClick = () => {
		dispatch(setTheme());
	};

	return (
		<Tooltip label="Theme" withArrow>
			<ActionIcon variant="filled" color="red" onClick={handleClick}>
				{darkMode ? (
					<MdOutlineDarkMode size={30} />
				) : (
					<MdOutlineLightMode size={30} />
				)}
			</ActionIcon>
		</Tooltip>
	);
};

export default ThemeButton;
