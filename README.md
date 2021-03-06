# array-unique 

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/array-unique?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/array-unique)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/array-unique)](https://www.npmjs.com/package/@ivanhanak_com/array-unique)

A lightweight javascript library to remove duplicates from an array. 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/array-unique
```

Using yarn:

```sh
yarn add @ivanhanak_com/array-unique
```

## Import
```javascript
import arrayUnique from '@ivanhanak_com/array-unique';
```

## Usage
The usage is pretty straightforward. 

Just import the library and pass an array as a first argument.

```javascript
const arr = ["ivan", "likes", "🐕", "🐕", "🐕"];

const uniqueValues = arrayUnique(arr); // => ["ivan", "likes", "🐕"];
```

## Browser support
IE: 10+