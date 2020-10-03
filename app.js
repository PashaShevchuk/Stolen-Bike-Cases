const express = require('express');
const sequelize = require('./dataBase/sequelize.config');
const cors = require('cors');
require('dotenv').config();

const apiRouter = require('./routes/api.router');
const croneRun = require('./crone-jobs');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRouter);


// error
app.use('*', (err, req, res, next) => {
  res
    .status(err.status || 404)
    .json({
      message: err.message || 'NOT FOUND',
      code: err.code || ''
    });
});


sequelize
  .sync()
  .then(() => {
    app.listen(5000, (err) => {
      if (err) {
        console.log(err);
      }
      console.log('Server listening on 5000');

      croneRun();
    });
  })
  .catch(reason => {
    console.log(reason);
  });

