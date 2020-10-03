const { Router } = require('express');

const { officerController } = require('../controllers');
const {
  officerMiddleware: { isOfficerInDbById, checkBikeCaseId }
} = require('../middlewares');


const officerRouter = Router();


officerRouter.post('/', isOfficerInDbById, checkBikeCaseId, officerController.officerWasFoundBike);
officerRouter.get('/', officerController.fetchAll); // for DEV


module.exports = officerRouter;
