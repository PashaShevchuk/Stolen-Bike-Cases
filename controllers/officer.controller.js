const { officerService, reportService } = require('../services');


module.exports = {
  fetchAll: async (req, res, next) => {
    try {
      const officers = await officerService.getAll();

      res.json(officers);

    } catch (e) {
      next(e);
    }
  },

  officerWasFoundBike: async (req, res, next) => {
    try {
      const { officer, bike } = req;
      const officerWithUpdatedStatus = { ...officer, bike_case: null };
      const bikeWithUpdatedStatus = { ...bike, found: 'found' };

      await officerService.updateBikeCaseStatus(officer.id, officerWithUpdatedStatus);
      await reportService.updateFoundStatus(bike.id, bikeWithUpdatedStatus);

      res.status(200).json('The bike status has been updated');

    } catch (e) {
      next(e);
    }
  },

};
