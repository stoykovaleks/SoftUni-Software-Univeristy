function sumFirstAndLast (array){
   let first = Number(array.shift());
   let last = Number(array.pop());
   let result = first + last;
   
   console.log(result);
}

sumFirstAndLast (['20', '30', '40'])