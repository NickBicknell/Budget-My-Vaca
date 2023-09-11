const Trip = require('./Trip');
const Activities = require('./Activities');

Trip.hasMany(Activities, {
  foreignKey: 'trip_id',
  onDelete: 'CASCADE'
});

Activities.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

module.exports = { Trip, Activities };
