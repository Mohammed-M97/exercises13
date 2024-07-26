// Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a, b) => a - b);
  console.log(arr);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));