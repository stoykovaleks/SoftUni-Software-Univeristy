function sortArray(arr, order) {
    if (order === 'asc') {
      return arr.sort((a, b) => a - b);
    } else if (order === 'desc') {
      return arr.sort((a, b) => b - a);
    } else {

      return arr;
    }
  }
  

  const ascendingArray = sortArray([14, 7, 17, 6, 8], 'asc');
  console.log(ascendingArray); 
  
  const descendingArray = sortArray([14, 7, 17, 6, 8], 'desc');
  console.log(descendingArray);
  