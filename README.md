# 🇳🇵 Info Nepal

Effortlessly access and display Nepali address information (provinces, zones, districts, and municipalities) in your applications — with support for **both English and Devanagari**.

## ✨ Features
- ✅ List of all **districts** in Nepal  
- ✅ Provinces & zones with their respective districts  
- ✅ Municipalities (local bodies) under each district  
- ✅ Full **Devanagari script** support  
- ✅ Works with **CommonJS (`require`)** and **ESM (`import`)**  
- ✅ Includes TypeScript type definitions for improved developer experience and autocompletion.

---

## 📦 Installation

```bash
npm install info-nepal
```

or

```bash
yarn add info-nepal
```

---

## 🚀 Usage

### CommonJS (Node.js)
```js
const infoNepal = require("info-nepal");

console.log(infoNepal.allDistricts);
console.log(infoNepal.districtsOfProvince);
console.log(infoNepal.localBodies);
```

### ES Modules
```js
import infoNepal from "info-nepal";

console.log(infoNepal.allDistricts);
console.log(infoNepal.districtsOfProvince);
console.log(infoNepal.localBodies);
```

---

## 🔤 Devanagari Support
```js
import infoNepal from "info-nepal";

console.log(infoNepal.allDistrictsInDevanagari);
console.log(infoNepal.districtsOfProvinceInDevanagari);
console.log(infoNepal.localBodiesInDevanagari);
```

---

## 🟦 TypeScript Support

Type definitions are built-in, so you get **autocompletion** and **type safety** out of the box:

```ts
import infoNepal from "info-nepal";

const districts: string[] = infoNepal.allDistricts;
const province1Districts = infoNepal.districtsOfProvince["Province 1"];
const localBodies = infoNepal.localBodies["Kathmandu"];

console.log(province1Districts, localBodies);
```

---

## 🙌 Contributors

Thanks to these wonderful people:

<table>
<tr>
<td align="center"><a href="https://github.com/Aju100"><img src="https://avatars.githubusercontent.com/u/29862610?v=4" width="100px;" /><br /><sub><b>Aju Tamang</b></sub></a></td>
<td align="center"><a href="https://github.com/anwesh-b"><img src="https://avatars.githubusercontent.com/u/45763486?v=4" width="100px;" /><br /><sub><b>Anwesh Budhathoki</b></sub></a></td>
<td align="center"><a href="https://github.com/shivajichalise"><img src="https://avatars.githubusercontent.com/u/33979290?v=4" width="100px;" /><br /><sub><b>Shivaji Chalise</b></sub></a></td>
<td align="center"><a href="https://github.com/cyberkishor"><img src="https://avatars.githubusercontent.com/u/2122140?v=4" width="100px;" /><br /><sub><b>Kishor Kumar Mahato</b></sub></a></td>
<td align="center"><a href="https://github.com/mondyfy"><img src="https://avatars.githubusercontent.com/u/30776170?v=4" width="100px;" /><br /><sub><b>Sandip Basnet</b></sub></a></td>
</tr>
</table>

---

## 📜 License
[MIT](LICENSE)