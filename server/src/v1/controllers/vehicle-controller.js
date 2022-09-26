const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllVehicles = async (req, res) => {
	try {
		const vehicles = await prisma.vehicle.findMany();
		res.status(200).json(vehicles);
	} catch (error) {
		res.status(500).json({ error });
	}
};

exports.createVehicle = async (req, res) => {
	try {
		const { plate, model, type, capacity, driverId } = req.body;
		await prisma.vehicle.create({
			data: {
				plate: plate,
				model: model,
				type: type,
				capacity: capacity,
				driver_id: driverId,
			},
		});
		res.status(201).send('Vehicle created successfully!');
	} catch (error) {
		res.status(500).json({ error });
	}
};

exports.updateVehicle = async (req, res) => {
	try {
		const { vehicleId } = req.params;
		const { plate, model, type, capacity, driverId } = req.body;
		await prisma.vehicle.update({
			where: {
				id: parseInt(vehicleId),
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
				id: parseInt(vehicleId),
			},
		});
		res.status(200).send('Vehicle deleted successfully');
	} catch (error) {
		res.status(500).json({ error });
	}
};
