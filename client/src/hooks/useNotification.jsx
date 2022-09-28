import { showNotification } from '@mantine/notifications';
import { AiFillCar } from 'react-icons/ai';

export const useNotification = (res) => {
	showNotification({
		autoClose: 5000,
		title: 'Congratulations',
		message: res,
		color: 'red',
		icon: <AiFillCar />,
	});
};
