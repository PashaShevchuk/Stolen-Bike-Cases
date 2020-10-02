const { Router } = require('express');

// const {
//   carMiddleware: { checkCarValidity, isCarInDB, checkUpdateCarValidity },
//   tokenMiddleware: { checkAccessToken }
// } = require('../middlewares');
const { officerController } = require('../controllers');

const officerRouter = Router();


officerRouter.get('/', officerController.fetchAll);


module.exports = officerRouter;
