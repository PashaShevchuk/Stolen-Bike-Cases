const { officerService } = require('../services');
const { newReportValidator } = require('../validators');
const {
  CustomError,
  statusCodesEnum,
  officerErrors: { NOT_FOUND_OFFICER, BAD_REQUEST_NOT_VALID_BIKE_CASE }
} = require('../errors');


module.exports = {
  isOfficerInDbById: async (req, res, next) => {
    try {
      const { officer_id } = req.body;

      const officer = await officerService.findOneById(officer_id);

      if (!officer) {
        return next(new CustomError(
          NOT_FOUND_OFFICER.message,
          statusCodesEnum.NOT_FOUND,
          NOT_FOUND_OFFICER.code)
        );
      }

      req.officer = officer;
      next();

    } catch (e) {
      next(e);
    }
  },

  checkBikeCaseId: async (req, res, next) => {
    try {
      const { officer } = req;
      const { bike_case_id } = req.body;

      const officerWithBike = await officerService.findOneByOfficerIdBikeId(officer.id, bike_case_id);

      if (!officerWithBike) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_BIKE_CASE.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_BIKE_CASE.code)
        );
      }

      req.bike = officerWithBike.bike;
      next();

    } catch (e) {
      next(e);
    }
  },
};
