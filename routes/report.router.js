const { Router } = require('express');

const { reportController } = require('../controllers');
const { reportMiddleware } = require('../middlewares');

const reportRouter = Router();


reportRouter.post('/', reportMiddleware.checkReportValidity, reportController.createReport);
reportRouter.get('/', reportController.getAll); // for DEV


module.exports = reportRouter;
