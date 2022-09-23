import HomeButton from '../pages/HomePage/HomeButton';
import AddButton from '../pages/AddPage/AddButton';
import ThemeButton from './ThemeButton';
import { Link } from 'react-router-dom';
import { Group } from '@mantine/core';

const Icons = () => {
	return (
		<Group>
			<Link to="/">
				<HomeButton />
			</Link>
			<Link to="/add">
				<AddButton />
			</Link>
			<ThemeButton />
		</Group>
	);
};

export default Icons;
