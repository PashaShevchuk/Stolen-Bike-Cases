const { bikeService } = require('../services');


module.exports = {
  createReport: async (req, res, next) => {
    try {
      const reportData = req.body;

      const report = await bikeService.createReport({ reportData });

      res.json(report);

    } catch (e) {
      next(e);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const reports = await bikeService.getAll();

      res.json(reports);

    } catch (e) {
      next(e);
    }
  },
};
