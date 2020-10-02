const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize.config');
const { OFFICERS } = require('../../configs/db-tables.enum');

class OfficerModel extends Model {
}

OfficerModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // bike_id: {
  //   type: DataTypes.STRING
  // },

}, {
  sequelize,
  modelName: 'officer',
  tableName: OFFICERS,
  timestamps: false
});

module.exports = OfficerModel;
