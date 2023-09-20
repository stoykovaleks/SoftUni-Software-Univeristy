function catDiet(input) {
    let percentMaznini = Number(input[0]) / 100;
    let proteinPercent = Number(input[1] / 100);
    let vaglehidratiPercent = Number(input[2]) / 100;
    let totalKcal = Number(input[3]);
    let percentWater = Number(input[4]) / 100;

    let totalGramsMaznini = (totalKcal * percentMaznini) / 9;
    let totalGramsProtein = (totalKcal * proteinPercent) / 4;
    let totalGramsVaglehidrat = (totalKcal * vaglehidratiPercent) / 4;

    let totalFoodGrams = totalGramsMaznini + totalGramsProtein + totalGramsVaglehidrat;
    let caloriesPerGramFood = totalKcal / totalFoodGrams;
    let caloriesWithoutWater = caloriesPerGramFood-(caloriesPerGramFood * percentWater) % 100;

    console.log((caloriesWithoutWater).toFixed(4));
}

catDiet(["60", "25", "15", "2500", "60"])