import HomeButton from '../pages/Home/HomeButton';
import AddButton from '../pages/Add/AddButton';
import { Center, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Center
			sx={(theme) => ({
				// borderBottom: '1px solid gray',
				padding: '2rem',
			})}
		>
			<Group>
				<Link to="/">
					<HomeButton />
				</Link>
				<Link to="/add">
					<AddButton />
				</Link>
			</Group>
		</Center>
	);
};

export default Navbar;
