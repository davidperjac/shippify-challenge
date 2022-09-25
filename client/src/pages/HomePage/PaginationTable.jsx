import { setActivePage } from '../../redux/features/paginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mantine/core';

const PaginationTable = () => {
	const total = useSelector((state) => state.pagination.total);
	const activePage = useSelector((state) => state.pagination.activePage);
	const dispatch = useDispatch();

	const handleChange = (page) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		dispatch(setActivePage(page));
	};

	return (
		<Pagination
			onChange={handleChange}
			page={activePage}
			total={total}
			color="red"
			sx={{
				marginBottom: '2rem',
			}}
		/>
	);
};

export default PaginationTable;
