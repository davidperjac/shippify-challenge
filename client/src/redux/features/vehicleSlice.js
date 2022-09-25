import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	vehicles: [],
	refreshVehicles: false,
};

export const vehicleSlice = createSlice({
	name: 'vehicle',
	initialState,
	reducers: {
		setVehicles: (state, action) => {
			state.vehicles = action.payload;
		},
		setRefreshVehicles: (state) => {
			state.refreshVehicles = !state.refreshVehicles;
		},
	},
});

export const { setVehicles, setRefreshVehicles } = vehicleSlice.actions;
export default vehicleSlice.reducer;
