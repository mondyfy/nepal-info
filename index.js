// Core data
const allDistricts = require('./lib/districts');
const districtsOfZone = require('./lib/districtsZone');
const districtsOfProvince = require('./lib/districtsProvince');
const localBodies = require('./lib/localBodies');

// In Devanagari
const allDistrictsInDevanagari = require('./lib/districtsInDevanagari');
const districtsOfProvinceInDevanagari = require('./lib/districtsProvinceInDevanagari');
const localBodiesInDevanagari = require('./lib/localBodiesInDevanagari');
const allInfoInDevanagari = require('./lib/allInfoInDevanagari');

const infoNepal = {
  allDistricts,
  districtsOfZone,
  districtsOfProvince,
  localBodies,

  // in Devanagari
  allDistrictsInDevanagari,
  districtsOfProvinceInDevanagari,
  localBodiesInDevanagari,
  allInfoInDevanagari,
};

// CommonJS default export
module.exports = infoNepal;

// ES Module compatibility
module.exports.default = infoNepal;
