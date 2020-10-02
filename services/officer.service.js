const OfficerModel = require('../dataBase/models/officer.model');


module.exports = {
  getAll: () => OfficerModel.findAll({}),
};
