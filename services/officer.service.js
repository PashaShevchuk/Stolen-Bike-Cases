const OfficerModel = require('../dataBase/models/officer.model');
const BikeModel = require('../dataBase/models/bike.model');


module.exports = {
  getAll: () => OfficerModel.findAll({}),

  findOneById: (id) => OfficerModel.findOne({ where: { id } }),

  findOneByOfficerIdBikeId: (officer_id, bike_id) => OfficerModel.findOne({
    where: { id: officer_id, bike_case: bike_id },
    raw: true,
    nest: true,
    include: [BikeModel]
  }),

  findFreeOfficer: () => {
    return OfficerModel.findOne({
      where: { bike_case: null },
      raw: true,
      nest: true,
    })
  },

  updateBikeCaseStatus: (id, obj) => {
    return OfficerModel.update(obj, { where: { id } });
  },
};
