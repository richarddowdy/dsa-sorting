function merge(arr1, arr2) {
  let out = [];
  let idxOne = 0;
  let idxTwo = 0;
  console.log("running");
  while (out.length < (arr1.length + arr2.length)) {

    if (arr1[idxOne] === arr2[idxTwo]) {
      out.push(arr1[idxOne]);
      idxOne++
    }
    if (arr1[idxOne] < arr2[idxTwo] || idxTwo >= arr2.length) {
      out.push(arr1[idxOne]);
      idxOne++
      if (out.length === arr1.length + arr2.length) {
        break
      }
    }
    if (arr1[idxOne] > arr2[idxTwo] || idxOne >= arr1.length) {
      out.push(arr2[idxTwo]);
      idxTwo++
      if (out.length === arr1.length + arr2.length) {
        break
      }
    }
  }
  return out;
}

function mergeSort(arr) {
  while()
}

module.exports = { merge, mergeSort };

// let arr1 = [1, 3, 4, 5];
// let arr2 = [2, 4, 6, 8];
// merge(arr1, arr2) // [1,2,3,4,4,5,6,8]
// compare both pointers btwn arr1[i] and arr2[j]
// depending on which pointer is less, push that val into new arr, and move that pointer forward 
// continue until you reach the end of one of the arrays, then push the rest of vals from longer array

