import VehicleTable from '../pages/HomePage/VehicleTable';
import DriverTable from '../pages/HomePage/DriverTable';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import App from '../App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <DriverTable />,
			},
			{
				path: '/:driverId',
				element: <VehicleTable />,
			},
		],
	},
]);
