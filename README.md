# asyncArray

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Async Arrays for ES6

## Install

```bash
npm install async-array-class
```

## Compatibility

This class extends the native Array, so this works only in the engines that support natively ES6 classes

https://kangax.github.io/compat-table/es6/#test-class

all the updated browsers, no IE

http://node.green/#class

from Node 4.4.6

## Description

This class extends the normal Array adding the following async methods:
- everyAsync
- filterAsync
- findAsync
- findIndexAsync
- includesAsync
- someAsync
- mapAsync
- reduceAsync
- reduceRightAsync

## Use cases

This methods can be useful in a lot of cases, for example you can use map to transform an array of urls, in an array of documents :
```js
const asyncListOfUrls = AsyncArray.from(listOfUrls)
const asyncListOfDocuments = await asyncListOfUrls.map(downloadUrl)
```

or a long list of user cases ( this are just examples ):

```js
const asyncListOfFilenames = AsyncArray.from(listOfFilenames)
const asyncListOfSmallFiles = await asyncListOfFilenames.filter(isFileSmallerThan300KB)

```


```js
const asyncListOfDependecies = AsyncArray.from(lListOfDependecies)
const isAppUpdated = await asyncListOfDependecies.every(isDependenciesUpdated)

```

## Example

http://jsbin.com/sixibupava/edit?js,console
