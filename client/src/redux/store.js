import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import themeReducer from './features/themeSlice';
import vehicleReducer from './features/vehicleSlice';
import driverReducer from './features/driverSlice';
import paginationReducer from './features/paginationSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		vehicle: vehicleReducer,
		driver: driverReducer,
		pagination: paginationReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
		immutableCheck: false,
	}),
});
