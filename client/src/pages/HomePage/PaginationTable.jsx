import { Pagination } from '@mantine/core';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setActivePage } from '../../redux/features/paginationSlice';

const PaginationTable = () => {
	const dispatch = useDispatch();
	const [activePage, setPage] = useState(1);
	const { total } = useSelector((state) => state.pagination);

	const handleChange = (page) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setPage(page);
		dispatch(setActivePage(page));
	};

	return (
		<Pagination
			onChange={handleChange}
			page={activePage}
			total={total}
			color="red"
			sx={(theme) => ({
				marginBottom: '2rem',
			})}
		/>
	);
};

export default PaginationTable;
