const express = require('express');
const router = express.Router();

/* VEHICLE ROUTES. */
router.use('/vehicle', require('./vehicle-routes'));
router.use('/driver', require('./driver-routes'));

module.exports = router;
