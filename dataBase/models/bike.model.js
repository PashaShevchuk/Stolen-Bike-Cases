const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize.config');
const OfficerModel = require('./officer.model');
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
  // owner_name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // owner_surname: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // telephone: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // residence_address: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // date_abduction: {
  //   type: DataTypes.STRING,
  // },
  // abduction_address: {
  //   type: DataTypes.STRING,
  // },
  // brand: {
  //   type: DataTypes.STRING,
  // },
  // frame_number: {
  //   type: DataTypes.STRING,
  // },
  // color: {
  //   type: DataTypes.STRING,
  // },
  // other_data: {
  //   type: DataTypes.STRING,
  // },
  created_at: {
    type: DataTypes.STRING,
    defaultValue: new Date().toISOString()
  },
  officer_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },

}, {
  sequelize,
  modelName: 'bike',
  tableName: BIKES,
  timestamps: false
});

BikeModel.belongsTo(OfficerModel, { foreignKey: 'officer_id' });


module.exports = BikeModel;
