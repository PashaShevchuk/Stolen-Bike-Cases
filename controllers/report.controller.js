const { reportService } = require('../services');


module.exports = {
  createReport: async (req, res, next) => {
    try {
      const reportObj = req.body;

      const report = await reportService.create(reportObj);

      res.json(report);

    } catch (e) {
      next(e);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const reports = await reportService.getAll();

      res.json(reports);

    } catch (e) {
      next(e);
    }
  },
};
