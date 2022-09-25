import themeReducer from './features/themeSlice';
import vehicleReducer from './features/vehicleSlice';
import driverReducer from './features/driverSlice';
import paginationReducer from './features/paginationSlice';

export const rootReducer = {
	theme: themeReducer,
	vehicle: vehicleReducer,
	driver: driverReducer,
	pagination: paginationReducer,
};
