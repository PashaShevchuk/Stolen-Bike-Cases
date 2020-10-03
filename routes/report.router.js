const { Router } = require('express');

const { bikeController } = require('../controllers');
const { reportMiddleware } = require('../middlewares');

const reportRouter = Router();


reportRouter.get('/', bikeController.getAll);

reportRouter.post('/', reportMiddleware.checkReportValidity, bikeController.createReport);


module.exports = reportRouter;
