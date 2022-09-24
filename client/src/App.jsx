import { MantineProvider, Stack } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Topbar from './components/Topbar';
import './App.css';

export default function App() {
	const darkMode = useSelector((state) => state.theme.value);
	return (
		<MantineProvider theme={{ colorScheme: darkMode ? 'dark' : 'light' }}>
			<NotificationsProvider position="top-right">
				<Stack
					sx={(theme) => ({
						height: '100%',
						padding: '0.6rem',
						backgroundColor:
							theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
					})}
				>
					<Topbar />
					<Outlet />
				</Stack>
			</NotificationsProvider>
		</MantineProvider>
	);
}
