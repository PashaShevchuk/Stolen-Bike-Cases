const BikeModel = require('../dataBase/models/bike.model');


module.exports = {
  findOneById: (id) => BikeModel.findOne({ where: { id } }),

  create: (reportObj) => BikeModel.create(reportObj).then(() => 'The report has been created'),

  getNotFoundBike: () => BikeModel.findOne({
    where: { found: 'not found' },
    raw: true,
    nest: true,
  }),

  updateFoundStatus: (id, obj) => {
    return BikeModel.update(obj, { where: { id } });
  },
};
