const express = require('express');
const router = express.Router();

const driverController = require('../controllers/driver-controller');

/* GET ALL VEHICLES */
router.get('/', driverController.getAllDrivers);

module.exports = router;
