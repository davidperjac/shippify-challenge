import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider, Stack } from '@mantine/core';
import HomeTable from './pages/HomePage/HomeTable';
import { useRedux } from './hooks/useRedux';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

export default function App() {
	const { darkMode } = useRedux();
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
					<HomeTable />
				</Stack>
				<Footer />
			</NotificationsProvider>
		</MantineProvider>
	);
}
