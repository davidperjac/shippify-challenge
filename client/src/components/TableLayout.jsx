import { Table } from '@mantine/core';

const TableLayout = (props) => {
	return (
		<Table
			verticalSpacing="md"
			horizontalSpacing="lg"
			sx={(theme) => ({
				marginTop: '1rem',
				border: `2px solid ${
					theme.colorScheme === 'dark'
						? theme.colors.dark[6]
						: theme.colors.gray[2]
				}`,
			})}
			striped
			highlightOnHover
		>
			{props.children}
		</Table>
	);
};

export default TableLayout;
