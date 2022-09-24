import { createSlice } from '@reduxjs/toolkit';

const initialState = { activePage: 1, total: 0 };

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setActivePage: (state, action) => {
			state.activePage = action.payload;
		},
		setTotalPage: (state, action) => {
			state.total = action.payload;
		},
	},
});

export const { setActivePage, setTotalPage } = paginationSlice.actions;
export default paginationSlice.reducer;
