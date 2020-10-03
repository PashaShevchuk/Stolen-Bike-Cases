const { reportService } = require('../services');


module.exports = {
  createReport: async (req, res, next) => {
    try {
      const { reportObj } = req;

      const reportMessage = await reportService.create(reportObj);

      res.status(200).json(reportMessage);

    } catch (e) {
      next(e);
    }
  },
};
