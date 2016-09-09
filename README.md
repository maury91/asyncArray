# asyncArray

Async Arrays for ES6

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

This methods can be usefull in a lot of cases, for example you can use map to transform an array of urls, in an array of documents :
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
