function multiplyAll(arr) {

  let product = 1; 

  for (let index = 0; index < arr.length; index++) {

      for (let innerIndex = 0; innerIndex < arr[index].length; innerIndex++) {

          product *= arr[index][innerIndex]; 
      }
  }

  return product; 
}

let finalResult = multiplyAll([[1,2], [3,4], [5, 6, 7]]); 

console.log(finalResult);  // 2 * 12 * 210 = 5040