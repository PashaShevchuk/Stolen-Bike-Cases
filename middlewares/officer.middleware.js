const { officerService } = require('../services');
const { newReportValidator } = require('../validators');
const {
  CustomError,
  statusCodesEnum,
  officerErrors: { NOT_FOUND_OFFICER }
} = require('../errors');


module.exports = {
  isOfficerInDbById: (req, res, next) => {
    try {
      const { officer_id } = req.body;

      const officer = officerService.findOneById(officer_id);

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
};
