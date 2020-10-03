const BikeModel = require('../dataBase/models/bike.model');


module.exports = {
  getAll: () => BikeModel.findAll({}),
  createReport: (reportData) => BikeModel.create({ reportData }).then(() => 'The report has been created'),
};
