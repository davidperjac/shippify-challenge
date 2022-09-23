const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getVehicleByDriver = async (req, res) => {
	try {
		const { driverId } = req.params;
		const driverVehicles = await prisma.vehicle.findMany({
			where: { driver_id: driverId },
		});
		res.status(200).json(driverVehicles);
	} catch (error) {
		res.status(500).json({ error });
	}
};

exports.createVehicle = async () => {
	try {
		const { first_name, last_name } = req.body;

		const driverId = await prisma.user.findUnique({
			where: {
				first_name: first_name,
				last_name: last_name,
			},
			select: {
				driver_id: true,
			},
		});

		if (driverId === null) return res.status(400).send('Driver does not exist');

		const { plate, model, type, capacity } = req.body;

		await prisma.vehicle.create({
			data: {
				plate: plate,
				model: model,
				type: type,
				capacity: capacity,
				driver_id: driverId,
			},
		});

		res.status(201).send('Vehicle created successfully');
	} catch (error) {
		res.status(500).json({ error });
	}
};

exports.updateVehicle = async (req, res) => {
	try {
		const { first_name, last_name } = req.body;

		const driverId = await prisma.user.findUnique({
			where: {
				first_name: first_name,
				last_name: last_name,
			},
			select: {
				driver_id: true,
			},
		});

		if (driverId === null) return res.status(400).send('Driver does not exist');

		const { plate, model, type, capacity, id } = req.body;

		await prisma.vehicle.update({
			where: {
				id: id,
			},
			data: {
				plate: plate,
				model: model,
				type: type,
				capacity: capacity,
				driver_id: driverId,
			},
		});

		res.status(200).send('Vehicle updated successfully');
	} catch (error) {
		res.status(500).json({ error });
	}
};

exports.deleteVehicle = async (req, res) => {
	try {
		const { vehicleId } = req.params;
		await prisma.vehicle.delete({
			where: {
				id: vehicleId,
			},
		});
		res.status(200).send('Vehicle deleted successfully');
	} catch (error) {
		res.status(500).json({ error });
	}
};
