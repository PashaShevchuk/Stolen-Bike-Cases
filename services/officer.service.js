const OfficerModel = require('../dataBase/models/officer.model');


module.exports = {
  getAll: () => OfficerModel.findAll({}),

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
