const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Activities extends Model {}

Activities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day: {
      type: DataTypes.STRING,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    trip_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trip',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Activities',
  }
);

module.exports = Activities;
