// const uuid = require('uuid').v4();
// const fs = require('fs-extra').promises;
// const path = require('path');

const sequelize = require('../dataBase/sequelize.config');
const { officerService } = require('../services');


module.exports = {
  fetchAll: async (req, res, next) => {
    try {
      const officers = await officerService.getAll();

      res.json(officers);

    } catch (e) {
      next(e);
    }
  },
};
