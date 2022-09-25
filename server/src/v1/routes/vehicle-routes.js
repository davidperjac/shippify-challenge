const vehicleController = require('../controllers/vehicle-controller');
const express = require('express');
const router = express.Router();

/* GET ALL VEHICLES */
router.get('/', vehicleController.getAllVehicles);

/* GET SINGLE VEHICLE */
router.get('/:vehicleId', vehicleController.getVehicleByID);

/* CREATE A NEW VEHICLE */
router.post('/', vehicleController.createVehicle);

/* UPDATE A VEHICLE */
router.put('/:vehicleId', vehicleController.updateVehicle);

/* DELETE A VEHICLE */
router.delete('/:vehicleId', vehicleController.deleteVehicle);

module.exports = router;
