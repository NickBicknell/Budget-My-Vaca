const sequelize = require('../config/connection');
const { Trip, Activities } = require('../models');

const tripData = require('./tripData.json');
const activitiesData = require('./activitiesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const trip = await Trip.bulkCreate(tripData, {
    individualHooks: true,
    returning: true,
  });

  for (const activities of activitiesData) {
    await Activities.create({
      ...activities,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
