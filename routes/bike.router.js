const { Router } = require('express');

const { bikeController } = require('../controllers');

const bikeRouter = Router();


bikeRouter.get('/', bikeController.getAll);
bikeRouter.post('/', bikeController.createReport);


module.exports = bikeRouter;
