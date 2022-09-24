import { createSlice } from '@reduxjs/toolkit';

const initialState = { driversNames: [], driverSelected: '' };

export const driverSlice = createSlice({
	name: 'driver',
	initialState,
	reducers: {
		setDriverNames: (state, action) => {
			state.driversNames = action.payload;
		},
		setDriverSelected: (state, action) => {
			state.driverSelected = action.payload;
		},
	},
});

export const { setDriverNames, setDriverSelected } = driverSlice.actions;
export default driverSlice.reducer;
