import { Table, Stack, Select } from '@mantine/core';

const HomeTable = () => {
	const elements = [
		{ position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
		{ position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
		{ position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
		{ position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
		{ position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
		{ position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
		{ position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
		{ position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
		{ position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
		{ position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
	];
	const rows = elements.map((element) => (
		<tr key={element.name}>
			<td>{element.position}</td>
			<td>{element.name}</td>
			<td>{element.symbol}</td>
			<td>{element.mass}</td>
		</tr>
	));

	const data = [
		{ value: 'react', label: 'React' },
		{ value: 'ng', label: 'Angular' },
		{ value: 'svelte', label: 'Svelte' },
		{ value: 'vue', label: 'Vue' },
		{ value: 'riot', label: 'Riot' },
		{ value: 'next', label: 'Next.js' },
		{ value: 'blitz', label: 'Blitz.js' },
	];
	return (
		<Stack>
			<Select data={data} label="Filter vehicles" placeholder="Pick one" />
			<Table
				sx={(theme) => ({
					padding: '2rem',
					border: `2px solid ${
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[2]
					}`,
				})}
				horizontalSpacing="xl"
				verticalSpacing="md"
				striped
				highlightOnHover
			>
				<thead>
					<tr>
						<th>Element position</th>
						<th>Element name</th>
						<th>Symbol</th>
						<th>Atomic mass</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</Stack>
	);
};

export default HomeTable;
