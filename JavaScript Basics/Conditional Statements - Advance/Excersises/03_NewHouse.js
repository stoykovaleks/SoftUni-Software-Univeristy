function newHouse (input){
    let flowersType = input[0];
    let countFlowers = Number (input[1]);
    let budget = Number (input[2]);

     let totalSum = 0;
    
     switch (flowersType){
        case "Roses":
            if (countFlowers > 80){
                totalSum = (countFlowers * 5) * 0.9
            }
            else{
                totalSum = countFlowers * 5
            }
            break;
        
        case "Dahlias":
            if (countFlowers > 90){
                totalSum = (countFlowers * 3.80) * 0.85
            }
            else{
                totalSum = countFlowers * 3.80
            }
            break;

        case "Tulips":
            if (countFlowers > 80){
                totalSum = (countFlowers * 2.80) * 0.85
            }
            else{
                totalSum = countFlowers * 2.80
            }
            break;

        case "Narcissus":
            if (countFlowers < 120){
                totalSum = (countFlowers * 3) * 1.15
            }
            else{
                totalSum = countFlowers * 3
            }
            break;

        case "Gladiolus":
            if (countFlowers < 80){
                totalSum = (countFlowers * 2.50) * 1.2
            }
            else{
                totalSum = countFlowers * 2.50
            }
            break;
     }

     if (budget >= totalSum){
        console.log (`Hey, you have a great garden with ${countFlowers} ${flowersType} and ${(budget - totalSum).toFixed(2)} leva left.`)
     }
     else{
        console.log (`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`)
     }
     
}
newHouse (["Dahlias","112","460"])

