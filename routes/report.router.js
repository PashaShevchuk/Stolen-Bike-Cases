const { Router } = require('express');

const { bikeController } = require('../controllers');

const reportRouter = Router();


// reportRouter.get('/', bikeController.getAll);

reportRouter.post('/', bikeController.createReport);


module.exports = reportRouter;
