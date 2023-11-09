function add(num) {
    let currentSum = num;
  
    function addNext(nextNum) {
      currentSum += nextNum;
      return addNext;
    }
  
    addNext.toString = function () {
      return currentSum;
    };
  
    return addNext;
  }
  
  console.log(add(1));
  console.log(add(1)(6)(-3)); 
  