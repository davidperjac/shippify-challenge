import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider, Stack } from '@mantine/core';
import { useRedux } from './hooks/useRedux';
import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';

export default function App() {
	const { darkMode } = useRedux();
	return (
		<MantineProvider theme={{ colorScheme: darkMode ? 'dark' : 'light' }}>
			<NotificationsProvider position="top-right">
				<Stack
					align="center"
					sx={(theme) => ({
						minHeight: '97.5vh',
						padding: '0.6rem',
						backgroundColor:
							theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
					})}
				>
					<Topbar />
					<Stack
						sx={{
							marginTop: '3rem',
						}}
						spacing="xl"
						align="center"
					>
						<Outlet />
					</Stack>
				</Stack>
			</NotificationsProvider>
		</MantineProvider>
	);
}
