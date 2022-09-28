import { ActionIcon, Tooltip, Modal } from '@mantine/core';
import { AiFillGithub } from 'react-icons/ai';

const GitHubButton = () => {
	return (
		<Tooltip label="GitHub" withArrow>
			<a href="https://github.com/davidperjac">
				<ActionIcon variant="filled" color="red">
					<AiFillGithub size={30} />
				</ActionIcon>
			</a>
		</Tooltip>
	);
};

export default GitHubButton;
