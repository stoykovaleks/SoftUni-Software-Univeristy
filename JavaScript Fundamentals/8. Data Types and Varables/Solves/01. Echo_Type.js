function echoType (param){
  let type = typeof param;

  if (type === 'string'){
    console.log('string');
    console.log(`${param}`);
  }
  else if (type === 'number'){
    console.log('number');
    console.log(`${param}`);
  }
  else{
    console.log('object');
    console.log("Parameter is not suitable for printing");
  }
}

echoType(18)