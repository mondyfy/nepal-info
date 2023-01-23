const allDistricts = require('./lib/districts');
const districtsOfZone = require('./lib/districtsZone');
const districtsOfProvince = require('./lib/districtsProvince');
const localBodies = require('./lib/localBodies');

// In Devanagari
const allDistrictsInDevanagari = require('./lib/districtsInDevanagari');
const districtsOfProvinceInDevanagari = require('./lib/districtsProvinceInDevanagari');
const localBodiesInDevanagari = require('./lib/localBodiesInDevanagari');

module.exports = {
  allDistricts,
  districtsOfZone,
  districtsOfProvince,
  localBodies,

  // in devanagari 
  allDistrictsInDevanagari,
  districtsOfProvinceInDevanagari,
  localBodiesInDevanagari
};
