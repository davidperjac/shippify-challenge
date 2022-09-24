export function getNameByID(driverId, driverList) {
	driverList.forEach((driver) => {
		if (driver.id === driverId) {
			return driver.label;
		}
	});
}
