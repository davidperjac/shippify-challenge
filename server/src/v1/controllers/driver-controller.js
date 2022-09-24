const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllDrivers = async (req, res) => {
	try {
		const drivers = await prisma.driver.findMany();
		res.status(200).json(drivers);
	} catch (error) {
		res.status(500).json({ error });
	}
};
