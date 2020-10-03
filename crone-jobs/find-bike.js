const { bikeService, officerService } = require('../services');


module.exports = async () => {
  console.log('1111111111');
  const stolenBike = await bikeService.findOne();
  if (!stolenBike) return;

  console.log('*********stolenBike', stolenBike);

  const freeOfficer = await officerService.findOne();
  console.log('*********freeOfficer', freeOfficer);

  const updatedBike = { ...stolenBike, found: 'wanted' };
  console.log('*********updatedBike', updatedBike);


  const updatedOfficer = { ...freeOfficer, bike_case: stolenBike.id };
  console.log('*********updatedOfficer', updatedOfficer);

  await bikeService.updateBy(stolenBike.id, updatedBike);
  await officerService.updateById(freeOfficer.id, updatedOfficer);
}
