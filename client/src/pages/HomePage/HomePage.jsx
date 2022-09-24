import { Stack } from '@mantine/core';
import HomeTable from './HomeTable';

const HomePage = () => {
	return (
		<Stack
			sx={{
				height: '100%',
			}}
		>
			<HomeTable />
		</Stack>
	);
};

export default HomePage;
