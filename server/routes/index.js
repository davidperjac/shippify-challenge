const express = require('express');
const router = express.Router();

/* VEHICLE ROUTES. */
router.use('/vehicle', require('./vehicle-routes'));

module.exports = router;
