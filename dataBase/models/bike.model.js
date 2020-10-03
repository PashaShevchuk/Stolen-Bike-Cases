const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize.config');
// const OfficerModel = require('./officer.model');
const { BIKES } = require('../../configs/db-tables.enum');

class BikeModel extends Model {
}

BikeModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contacts: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bike: {
    type: DataTypes.STRING,
    allowNull: false
  },
  found: {
    type: DataTypes.ENUM('not found', 'found', 'wanted'),
    allowNull: false,
    defaultValue: 'not found'
  },
}, {
  sequelize,
  modelName: 'bike',
  tableName: BIKES,
  timestamps: false
});

module.exports = BikeModel;
