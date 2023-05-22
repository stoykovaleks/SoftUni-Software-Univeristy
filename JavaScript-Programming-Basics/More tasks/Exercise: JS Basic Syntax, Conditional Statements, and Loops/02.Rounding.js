function round(value, precision) {
    if (precision > 15) precision = 15;
    return parseFloat(value.toFixed(precision));
  }
  
round([3.1415926535897932384626433832795,2])