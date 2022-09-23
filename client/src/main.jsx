import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import React from 'react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
