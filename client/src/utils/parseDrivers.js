import { capitalize } from './capitalize';

export const parseDrivers = (res) => {
	const labeledDrivers = res.map((driver) => {
		const container = {
			value: '',
			status: '',
			id: 0,
		};
		container.value =
			capitalize(driver.first_name) + ' ' + capitalize(driver.last_name);
		container.status = driver.status;
		container.id = driver.id;
		return container;
	});
	return labeledDrivers;
};
