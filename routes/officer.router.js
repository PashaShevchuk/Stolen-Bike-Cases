const { Router } = require('express');

const { officerController } = require('../controllers');
const {
  officerMiddleware: { isOfficerInDbById },
  reportMiddleware: { isBikeInDbById }
} = require('../middlewares');


const officerRouter = Router();


officerRouter.post('/', isOfficerInDbById, isBikeInDbById, officerController.officerWasFoundBike);
officerRouter.get('/', officerController.fetchAll); // for DEV


module.exports = officerRouter;
