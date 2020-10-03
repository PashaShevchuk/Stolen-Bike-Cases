const { reportService, officerService } = require('../services');


module.exports = async () => {
  try {
    const freeOfficer = await officerService.findFreeOfficer();
    if (!freeOfficer) return;

    const notFoundBike = await reportService.getNotFoundBike();
    if (!notFoundBike) return;

    const officerWithUpdatedStatus = { ...freeOfficer, bike_case: notFoundBike.id };
    const bikeWithUpdatedStatus = { ...notFoundBike, found: 'wanted' };

    await reportService.updateFoundStatus(notFoundBike.id, bikeWithUpdatedStatus);
    await officerService.updateBikeCaseStatus(freeOfficer.id, officerWithUpdatedStatus);

  } catch (e) {
    console.log('crone give-bike-to-free-officer', e);
  }
}
