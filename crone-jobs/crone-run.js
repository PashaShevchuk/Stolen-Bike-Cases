const cron = require('node-cron');

const findBike = require('./give-bike-to-free-officer');


module.exports = () => {
  try {
    // at 00:00 everyday
    cron.schedule('*/5 * * * * *', async () => {
      console.log('-----------------------ITERATION START------------------------');

      await findBike();

      console.log('-----------------------ITERATION FINISH-----------------------');
    });

  } catch (e) {
    console.log(e);
  }
}
