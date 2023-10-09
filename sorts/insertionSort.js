const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export const insertionSort = (arr, compare = defaultCompare) => {
  const { length } = arr;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
};
