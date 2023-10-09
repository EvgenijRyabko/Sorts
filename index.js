import {
  bblSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  bucketSort,
} from "./sorts.js";

const checkProductivity = (fncArr, arrLength) => {
  const arr = Array.from({ length: arrLength }, () =>
    Math.floor(Math.random() * 40)
  );

  for (let obj of fncArr) {
    console.time(`${obj.fncName} for ${arrLength} numbers`);

    obj.fnc(arr);

    console.timeEnd(`${obj.fncName} for ${arrLength} numbers`);
  }
};

checkProductivity(
  [
    { fncName: "BubbleSort", fnc: bblSort },
    {
      fncName: "SelectionSort",
      fnc: selectionSort,
    },
    {
      fncName: "InsertionSort",
      fnc: insertionSort,
    },
    {
      fncName: "MergeSort",
      fnc: mergeSort,
    },
    //  {
    //    fncName: "QuickSort",
    //    fnc: quickSort,
    //  },
    {
      fncName: "BucketSort",
      fnc: bucketSort,
    },
  ],
  100000
);
