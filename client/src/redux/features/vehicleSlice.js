import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	vehicles: [],
	refreshVehicles: false,
	editedVehicle: {},
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
		setEditedVehicle: (state, action) => {
			state.editedVehicle = action.payload;
		},
	},
});

export const { setVehicles, setRefreshVehicles } = vehicleSlice.actions;
export default vehicleSlice.reducer;
