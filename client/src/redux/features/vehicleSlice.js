import { createSlice } from '@reduxjs/toolkit';

const initialState = { vehicles: [] };

export const vehicleSlice = createSlice({
	name: 'vehicle',
	initialState,
	reducers: {
		setVehicles: (state, action) => {
			state.vehicles = action.payload;
		},
	},
});

export const { setVehicles } = vehicleSlice.actions;
export default vehicleSlice.reducer;
