import { setActivePage } from '../../redux/features/paginationSlice';
import { useRedux } from '../../hooks/useRedux';
import { Pagination } from '@mantine/core';

const PaginationTable = () => {
	const { total, activePage, dispatch } = useRedux();

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
				padding: '2rem',
				marginBottom: '2rem',
			}}
		/>
	);
};

export default PaginationTable;
