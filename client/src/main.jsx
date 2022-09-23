import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
