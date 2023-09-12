const Trip = require('./Trip');
const Activities = require('./Activities');
const User = require('./User');
const Project = require('./Project');

Trip.hasMany(Activities, {
  foreignKey: 'trip_id',
  onDelete: 'CASCADE'
});

Activities.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { Trip, Activities, User, Project };





