function biggerHalf(array){
   array.sort((a,b) => a - b);
   
   let firstHalf = Math.floor(array.length/2);
   let result = array.slice(firstHalf);

   console.log(result);
}

biggerHalf([4, 7, 2, 5])