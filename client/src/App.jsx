import { MantineProvider } from '@mantine/core';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

export default function App() {
	return (
		<MantineProvider>
			<div className="app">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</MantineProvider>
	);
}
