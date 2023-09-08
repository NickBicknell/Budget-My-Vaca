const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./tripsRoute');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
