export function getNameByID(driverId, driversNames) {
	for (const driver of driversNames) {
		if (driverId === driver.id) {
			return driver.value;
		}
	}
	return null;
}

export function getStatusByID(driverId, driversNames) {
	for (const driver of driversNames) {
		if (driverId === driver.id) {
			return driver.status;
		}
	}
	return null;
}

export function getIDbyName(driverName, driversNames) {
	for (const driver of driversNames) {
		if (driverName === driver.value) {
			return driver.id;
		}
	}
	return null;
}
