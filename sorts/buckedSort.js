import { insertionSort } from "./insertionSort.js";

export const bucketSort = (array, bucketSize) => {
  if (array.length === 0) {
    return array;
  }

  // Declaring vars
  var i,
    minValue = array[0],
    maxValue = array[0],
    bucketSize = bucketSize || 5;

  // Setting min and max values
  array.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Pushing values to buckets
  array.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
      currentVal
    );
  });

  // Sorting buckets
  array.length = 0;

  allBuckets.forEach(function (bucket) {
    insertionSort(bucket);
    bucket.forEach(function (element) {
      array.push(element);
    });
  });

  return array;
};
