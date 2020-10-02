const { bikeService } = require('../services');


module.exports = {
  createReport: async (req, res, next) => {
    try {
      const report = await bikeService.createReport();

      res.json(report);

    } catch (e) {
      next(e);
    }
  },
};
