# Info Nepal

Feb. 05, 2020
<br />

Have you ever wanted to effortlessly display address information in a dropdown menu or an existing form? Do you wish to access this data in a straightforward and convenient manner, all without the need for hard-coding? If so, then 'info-nepal' is the solution you've been seeking.

## Description

Info Nepal is a compact npm package that furnishes the following data:-
1. An array containing the complete list of districts within Nepal.
2. An object mapping districts to their respective Provinces and Zones.
3. An object delineating local bodies (municipalities) corresponding to their respective districts.

# Install

```
npm i info-nepal
```

or

```
yarn add info-nepal
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

## Devanagri support

```js
const infoNepal = require('info-nepal');
// Load core infoNepal.

const allDistrictsInDevanagari = infoNepal.allDistrictsInDevanagari;
// Load all districts of Nepal in Devanagari.

const districtsOfProvinceInDevanagari = infoNepal.districtsOfProvinceInDevanagari;
// Load respective districts of provinces in Devanagari.

const localBodiesInDevanagari = infoNepal.localBodiesInDevanagari;
// Load localBodies i.e. municipalities & rural municipalities of respective districts in Devanagari.

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
<a href="https://github.com/shivajichalise"><img src="https://avatars.githubusercontent.com/u/33979290?v=4" width="100px;" alt=""/><br /><sub><b>Shivaji Chalise</b></sub></a><br />
</td>

<td align="center">
<a href="https://github.com/mondyfy"><img src="https://avatars3.githubusercontent.com/u/30776170?s=400&v=4" width="100px;" alt=""/><br /><sub><b> Sandip Basnet
</b></sub></a><br />
</td>

</tr>
</table>

This project adheres to the [all-contributors](https://github.com/all-contributors/all-contributors) specification, and we welcome contributions of any kind!

