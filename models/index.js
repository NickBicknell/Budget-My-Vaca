const Trip = require('./Trip');
const Activities = require('./Activities');
const User = require('./User');

Trip.hasMany(Activities, {
  foreignKey: 'trip_id',
  onDelete: 'CASCADE'
});

Activities.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

User.hasMany(Trip, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Trip.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { Trip, Activities, User };