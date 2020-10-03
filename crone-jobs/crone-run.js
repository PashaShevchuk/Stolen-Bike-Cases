const cron = require('node-cron');

const giveBikeToFreeOfficer = require('./give-bike-to-free-officer');


const every2Hour = '0 */2 * * *';
const every5SecondDEV = '*/5 * * * * *';


module.exports = () => {
  try {
    cron.schedule(every2Hour, async () => {
      console.log('-----------------------ITERATION START------------------------');

      await giveBikeToFreeOfficer();

      console.log('-----------------------ITERATION FINISH-----------------------');
    });

  } catch (e) {
    console.log('crone-run', e);
  }
}
