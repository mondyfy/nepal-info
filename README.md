# Info Nepal

Feb. 05, 2020
<br />

Ever had the urge to show address information in dropdown or any pre existing form? And wanted to access the data in some sane, easy way? Don't want to hard code the data, for whatever reason? Then info-nepal is what you're looking for!

## Description


Info Nepal is a tiny npm package that provides following data:-
1. The list of the districts of Nepal in an array.
2. List of districts of Nepal with respect to Provinces & Zones as an object.
3. List of local bodies(i.e. municipalities) of respective districts as an object.

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

## Contribution ✨

Thanks goes to these wonderful people:
<table>
<tr>

<td align="center">
<a href="https://github.com/Aju100"><img src="https://avatars2.githubusercontent.com/u/29862610?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Aju Tamang</b></sub></a><br />
</td>

<td align="center">
<a href="https://github.com/anwesh-b"><img src="https://avatars3.githubusercontent.com/u/45763486?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Anwesh Budhathoki</b></sub></a><br />
</td>

<td align="center">
<a href="https://github.com/mondyfy"><img src="https://avatars3.githubusercontent.com/u/30776170?s=400&v=4" width="100px;" alt=""/><br /><sub><b> Sandip Basnet
</b></sub></a><br />
</td>

</tr>
</table>

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

