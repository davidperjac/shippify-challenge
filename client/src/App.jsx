import { MantineProvider, Stack } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import './App.css';

export default function App() {
	return (
		<MantineProvider>
			<div className="app">
				<Topbar />
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</MantineProvider>
	);
}
