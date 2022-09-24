import { createSlice } from '@reduxjs/toolkit';

const initialState = { driversNames: [] };

export const driverSlice = createSlice({
	name: 'driver',
	initialState,
	reducers: {
		setDriverNames: (state, action) => {
			state.driversNames = action.payload;
		},
	},
});

export const { setDriverNames } = driverSlice.actions;
export default driverSlice.reducer;
