const { reportService } = require('../services');
const { newReportValidator } = require('../validators');
const {
  CustomError,
  statusCodesEnum,
  reportsErrors: { BAD_REQUEST_NOT_VALID_DATA, NOT_FOUND_BIKE }
} = require('../errors');


module.exports = {
  checkReportValidity: (req, res, next) => {
    try {
      const { error } = newReportValidator.validate(req.body);

      if (error) {
        return next(new CustomError(error.details[0].message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_DATA.code)
        );
      }

      req.reportObj = req.body;
      next();

    } catch (e) {
      next(e);
    }
  },

  isBikeInDbById: async (req, res, next) => {
    try {
      const { bike_case_id } = req.body;

      const bike = await reportService.findOneById(bike_case_id);

      if (!bike) {
        return next(new CustomError(
          NOT_FOUND_BIKE.message,
          statusCodesEnum.NOT_FOUND,
          NOT_FOUND_BIKE.code)
        );
      }

      req.bike = bike;
      next();

    } catch (e) {
      next(e);
    }
  },
};
