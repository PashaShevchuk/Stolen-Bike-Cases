const BikeModel = require('../dataBase/models/bike.model');


module.exports = {
  createReport: (reportData) => BikeModel.create({ reportData }).then(() => 'The report has been created'),
  getAll: () => BikeModel.findAll({}),
};
