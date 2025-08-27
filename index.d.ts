declare module "info-nepal" {
  // Core data types
  type District = string;
  type Province = string;
  type Zone = string;
  type LocalBody = string;

  // Objects
  interface DistrictsOfProvince {
    [province: string]: District[];
  }

  interface DistrictsOfZone {
    [zone: string]: District[];
  }

  interface LocalBodies {
    [district: string]: LocalBody[];
  }

  // Main export
  interface InfoNepal {
    // English
    allDistricts: District[];
    districtsOfProvince: DistrictsOfProvince;
    districtsOfZone: DistrictsOfZone;
    localBodies: LocalBodies;

    // Devanagari
    allDistrictsInDevanagari: District[];
    districtsOfProvinceInDevanagari: DistrictsOfProvince;
    localBodiesInDevanagari: LocalBodies;
    allInfoInDevanagari: {
      districts: District[];
      provinces: DistrictsOfProvince;
      localBodies: LocalBodies;
    };
  }

  const infoNepal: InfoNepal;
  export = infoNepal;
  export default infoNepal;
}
