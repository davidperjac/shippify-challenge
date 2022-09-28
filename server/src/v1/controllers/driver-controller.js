const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllDrivers = async (req, res) => {
	try {
		const { activePage } = req.params;
		const drivers = await prisma.driver.findMany();
		const total = drivers.length;
		const paginatedDrivers = await prisma.driver.findMany({
			skip: (parseInt(activePage) - 1) * 100,
			take: 100,
		});
		res.status(200).json({ paginatedDrivers, total });
	} catch (error) {
		res.status(500).json({ error });
	}
};
