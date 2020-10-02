const BikeModel = require('../dataBase/models/bike.model');


module.exports = {
  createReport: () => BikeModel.findAll({}),
};
