# Info Nepal

Jan. 28, 2020
<br />
Info Nepal is a tiny npm package that provides the list of the districts of Nepal in a bulk as well as that of respective Provinces & zones.

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

## Note:

WIP: updating local bodies i.e. municipalities & rural municipalities of respective districts.
