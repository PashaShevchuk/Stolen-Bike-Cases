const BikeModel = require('../dataBase/models/bike.model');


module.exports = {
  getAll: () => BikeModel.findAll({}),

  create: (reportObj) => BikeModel.create(reportObj).then(() => 'The report has been created'),


  findOne: () => BikeModel.findOne({
    where: { found: 'not found' },
    raw: true,
    nest: true,
  }),

  updateBy: (id, obj) => {
    return BikeModel.update(obj, { where: { id } });
  },
};
