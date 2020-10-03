const OfficerModel = require('../dataBase/models/officer.model');


module.exports = {
  getAll: () => OfficerModel.findAll({}),

  findOneById: (id) => OfficerModel.findOne({ where: { id } }),

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
