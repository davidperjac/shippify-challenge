import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddPage from '../pages/Add/AddPage';
import HomePage from '../pages/Home/HomePage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/add',
				element: <AddPage />,
			},
		],
	},
]);
