import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import EditPage from '../pages/EditPage/EditPage';
import HomePage from '../pages/HomePage/HomePage';
import AddPage from '../pages/AddPage/AddPage';
import App from '../App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/add',
				element: <AddPage />,
			},
			{
				path: '/edit',
				element: <EditPage />,
			},
		],
	},
]);
