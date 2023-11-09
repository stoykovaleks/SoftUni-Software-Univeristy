function calculator() {
    let selector1;
    let selector2;
    let resultSelector;
  
    function init(num1, num2, result) {
      selector1 = document.querySelector(num1);
      selector2 = document.querySelector(num2);
      resultSelector = document.querySelector(result);
    }
  
    function add() {
      if (selector1 && selector2 && resultSelector) {
        const num1 = Number(selector1.value);
        const num2 = Number(selector2.value);
        resultSelector.value = (num1 + num2).toString();
      }
    }
  
    function subtract() {
      if (selector1 && selector2 && resultSelector) {
        const num1 = Number(selector1.value);
        const num2 = Number(selector2.value);
        resultSelector.value = (num1 - num2).toString();
      }
    }
  
    return {
      init,
      add,
      subtract,
    };
  }
  
  const calculate = calculator();
  calculate.init('#num1', '#num2', '#result');
  