function solution() {
    let ingredients = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0,
    };
  
    const recipes = {
      apple: { carbohydrate: 1, flavour: 2 },
      lemonade: { carbohydrate: 10, flavour: 20 },
      burger: { carbohydrate: 5, fat: 7, flavour: 3 },
      eggs: { protein: 5, fat: 1, flavour: 1 },
      turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };
  
    function restock(microelement, quantity) {
      ingredients[microelement] += quantity;
      return "Success";
    }
  
    function prepare(recipe, quantity) {
      const requiredIngredients = recipes[recipe];
  
      for (const element in requiredIngredients) {
        if (
          ingredients[element] < requiredIngredients[element] * quantity
        ) {
          return `Error: not enough ${element} in stock`;
        }
      }
  
      for (const element in requiredIngredients) {
        ingredients[element] -= requiredIngredients[element] * quantity;
      }
  
      return "Success";
    }
  
    function report() {
      return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }
  
    return function (input) {
      const [command, ...args] = input.split(" ");
      if (command === "restock") {
        const [microelement, quantity] = args;
        return restock(microelement, +quantity);
      } else if (command === "prepare") {
        const [recipe, quantity] = args;
        return prepare(recipe, +quantity);
      } else if (command === "report") {
        return report();
      }
    };
  }
  