const { Router } = require('express');

const { bikeController } = require('../controllers');

const bikeRouter = Router();


bikeRouter.post('/', bikeController.createReport);
bikeRouter.get('/', bikeController.getAll);


module.exports = bikeRouter;
