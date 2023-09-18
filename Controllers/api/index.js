const router = require('express').Router();
const userRoutes = require('./userRoutes');
const activitiesRoutes = require('./activitiesRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/users', userRoutes);
router.use('/trips', tripsRoutes);
router.use('/activitiesRoutes', activitiesRoutes);

module.exports = router;