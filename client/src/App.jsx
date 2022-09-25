import { NotificationsProvider } from '@mantine/notifications';
import { setDriverNames } from './redux/features/driverSlice';
import { MantineProvider, Stack } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { capitalize } from './utils/capitalize';
import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import driverApi from './api/driverApi';
import { useEffect } from 'react';

export default function App() {
	const darkMode = useSelector((state) => state.theme.value);
	const dispatch = useDispatch();

	useEffect(() => {
		const getAllDrivers = async () => {
			try {
				const res = await driverApi.getAllDrivers();
				const labeledDrivers = res.map((driver) => {
					const container = {
						value: '',
						status: '',
						id: 0,
					};
					container.value =
						capitalize(driver.first_name) + ' ' + capitalize(driver.last_name);
					container.status = driver.status;
					container.id = driver.id;
					return container;
				});
				dispatch(setDriverNames(labeledDrivers));
			} catch (error) {
				console.log(error);
			}
		};
		getAllDrivers();
	}, []);

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
