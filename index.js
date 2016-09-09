/* global define */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory)
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory()
  } else {
    // Browser globals (root is window)
    root.AsyncArray = factory()
  }
}(this, function () {
  // Private functions
  function reduce (data, callback, initialValue) {
    // Return a promise
    return new Promise((resolve, reject) => {
      // Initialize the index
      let i = 0
      const _reduce = (currentValue) => {
        // If we have finish to reduce, resolve with the last value computed
        if (data.length === 0) {
          resolve(currentValue)
        }
        // Extract a value from the copied array
        const value = data.shift()
        // Call the function
        callback(currentValue, value, i++, this).then(_reduce, reject)
      }
      _reduce(initialValue)
    })
  }

  function transformToAsyncParallel (method) {
    return function (callback) {
      // Take a copy of the array, it might mutate by the time we've finished
      const data = this.constructor.from(this)
      // Transform all the elements into an array of promises using the predicate
      // as the promise
      return Promise.all(data.map((element, index) => callback(element, index, data))).then(result => {
        return data[ method ]((element, index) => {
          return result[ index ]
        })
      })
    }
  }

  // The main class
  class AsyncArray extends Array {

    reduceAsync (callback, initialValue) {
      // Take a copy of the array, it might mutate by the time we've finished
      const data = Array.from(this)
      return reduce(data, callback, initialValue)
    }

    reduceRightAsync (callback, initialValue) {
      // Take a copy of the array, it might mutate by the time we've finished
      const data = Array.from(this).reverse()
      return reduce(data, callback, initialValue)
    }
  }

  for (const method of [ 'every', 'filter', 'find', 'findIndex', 'includes', 'some', 'map' ]) {
    AsyncArray.prototype[ `${method}Async` ] = transformToAsyncParallel(method)
  }

  return AsyncArray
}))
