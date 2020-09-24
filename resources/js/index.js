// function isInArray(sortedArray, int) {
//     if (sortedArray.length === 1) {
//       return int === sortedArray[0];
      
//     }
//     const left = sortedArray.slice(0, Math.ceil(sortedArray.length / 2));
    
//     const last = left[left.length - 1];
    
//     if (int <= last) {
//         return isInArray(left, int); 
//     } else {
//         const right = sortedArray.slice(Math.ceil(sortedArray.length / 2));
//         return isInArray(right, int); 
//     }
// }
// console.log(
//     isInArray([1, 3, 5, 7, 9], 3)
//     )

/*
  You are given an array that has 1 rotation in it. 
  Find and return the lowest integer in this array
  
  findLowest([4, 5, 6, 7, 1, 2, 3]) => 1
  findLowest([12, 13, 14, 15, 2, 3, 8, 11]) => 2
*/
function findLowest(array) {
    if (array.length === 1) {
      return array[0];
    }
    
    const left = array.slice(0, Math.ceil(array.length / 2));
    const right = array.slice(Math.ceil(array.length / 2));
    
    // If left array and right array both have a length of 1...
    if (left.length === 1 && right.length === 1) {
      if (left[0] < right[0]) {
        return left[0];
      } else {
        return right[0];
      }
    } 
    
    
    if (left[0] > left[left.length - 1]) {
      // We know this array is not sorted... So...
      return findLowest(left);
    } else {
      // The left array is sorted! What do we do now?
      
      // if the last value of the "left array" 
      // is HIGHER than the 
      // first value of the "right array"
      
      if (left[left.length - 1] > right[0]) {
        // This means the first value in the "right array" is the lowest   
        return right[0];     
      }
      
  
      return findLowest(right);
    }
  }
  
