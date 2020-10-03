const { Router } = require('express');

const { reportRouter, officerRouter } = require('../routes');

const apiRouter = Router();


apiRouter.use('/report', reportRouter);

apiRouter.use('/officer', officerRouter);


module.exports = apiRouter;
