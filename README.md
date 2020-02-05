# Info Nepal

Feb. 05, 2020
<br />
Ever had the urge to show address information in dropdown or any pre existing form? And wanted to access the data in some sane, easy way? Don't want to hard code the data, for whatever reason? Then info-nepal is what you're looking for!

Description
===========

Info Nepal is a tiny npm package that provides following data:-
1. The list of the districts of Nepal in an array.
2. List of districts of Nepal with respect to Provinces & Zones.
3. List of local bodies(i.e. municipalities) of respective districts.

## Install

```
$ npm i info-nepal
```

## Usage

```js
const infoNepal = require('info-nepal');
// Load core infoNepal.

const allDistricts = infoNepal.allDistricts;
// Load all districts of Nepal.

const districtsOfProvince = infoNepal.districtsOfProvince;
// Load respective districts of provinces.

const districtsOfZone = infoNepal.districtsOfZone;
// Load respective districts of zones(before province).

const localBodies = infoNepal.localBodies;
// Load localBodies i.e. municipalities & rural municipalities of respective districts.

```

## Contribution

Any kinds of contribution are highly appreciated.


