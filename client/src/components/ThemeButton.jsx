import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { setTheme } from '../redux/features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ActionIcon, Tooltip } from '@mantine/core';

const ThemeButton = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.theme.value);

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
