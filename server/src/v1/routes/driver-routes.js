const express = require('express');
const router = express.Router();

const driverController = require('../controllers/driver-controller');

/* GET ALL DRIVERS */
router.get('/:activePage', driverController.getAllDrivers);

module.exports = router;
