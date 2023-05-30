function reverseArrayOfNumbers (n, arr){
   let reversedArr = arr.slice(0, n).reverse();
   console.log(reversedArr.join(" "));
}

reverseArrayOfNumbers (3, [10, 20, 30, 40, 50])