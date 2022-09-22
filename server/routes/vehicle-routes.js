const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/vehicle-controller');

/* GET VEHICLES BY A DRIVER */
router.get('/', vehicleController.getVehicleByDriver);

/* CREATE A NEW VEHICLE */
router.get('/', vehicleController.createVehicle);

/* UPDATE AN EXISTING VEHICLE */
router.get('/', vehicleController.updateVehicle);

/* DELETE A VEHICLE */
router.get('/', vehicleController.deleteVehicle);

module.exports = router;
