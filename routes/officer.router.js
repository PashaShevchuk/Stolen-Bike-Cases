const { Router } = require('express');

const { officerController } = require('../controllers');
const {
  officerMiddleware: { isOfficerInDbById, checkBikeCaseId }
} = require('../middlewares');


const officerRouter = Router();


officerRouter.post('/', isOfficerInDbById, checkBikeCaseId, officerController.officerWasFoundBike);


module.exports = officerRouter;
