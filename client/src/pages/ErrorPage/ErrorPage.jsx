import { Stack, Text, Group } from '@mantine/core';

const ErrorPage = () => {
	return (
		<Group position="center" sx={{ marginTop: '3rem' }}>
			<Stack align="center">
				<Text weight={700} size="xl">
					Oops!
				</Text>
				<Text>404 Not Found</Text>
			</Stack>
		</Group>
	);
};

export default ErrorPage;
