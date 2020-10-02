const { Router } = require('express');

const { bikeRouter, officerRouter } = require('../routes');

const apiRouter = Router();


apiRouter.use('/report', bikeRouter);
apiRouter.use('/officer', officerRouter);


module.exports = apiRouter;
