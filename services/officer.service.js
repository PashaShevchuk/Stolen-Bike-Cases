const OfficerModel = require('../dataBase/models/officer.model');


module.exports = {
  getAll: () => OfficerModel.findAll({}),

  findOne: () => {
    return OfficerModel.findOne({
      where: { bike_case: null },
      raw: true,
      nest: true,
    })
  },

  updateById: (id, obj) => {
    return OfficerModel.update(obj, { where: { id } });
  },
};
