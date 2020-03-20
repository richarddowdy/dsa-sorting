function bubbleSort(arr) {
  
  for(let i = 0; i < arr.length; i++){ //first pointer
    for(let j = i+1; j< arr.length; j++){// second pointer
      if(arr[i] > arr[j]){
        [arr[i], arr[j]]= [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;

//bubble sort if arr[j] > arr[j+1], swap two values
// [ 5, 3, 4, 1, 2 ] initial array unsorted
// [ 3, 4, 1, 2, 5 ] result of 5 being sorted only
// [ 3, 1, 2, 4, 5 ] result of 4 being sorted only, 