function fruitShop (input){
    let fruit = input[0];
    let dayOfWeek = input[1];
    let counts = Number (input[2]);

    let price = 0.0;

    switch (dayOfWeek){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        
            switch (fruit){
                case "banana": price = counts * 2.50; 
                console.log (price.toFixed(2));
                break;
                case "apple": price = counts * 1.20;
                console.log (price.toFixed(2));
                break;
                case "orange": price = counts * 0.85;
                console.log (price.toFixed(2));
                break;
                case "grapefruit": price = counts * 1.45; 
                console.log (price.toFixed(2));
                break;
                case "kiwi": price = counts * 2.70; 
                console.log (price.toFixed(2));
                break;
                case "pineapple": price = counts * 5.50;
                console.log (price.toFixed(2));
                break;
                case "grapes": price = counts * 3.85;
                console.log (price.toFixed(2));
                break;
                default : console.log ("error");
                 break;
            }
            break;   

        case "Saturday":
        case "Sunday":
            switch (fruit){
                case "banana": price = counts * 2.70; 
                console.log (price.toFixed(2));
                break;
                case "apple": price = counts * 1.25; 
                console.log (price.toFixed(2));
                break;
                case "orange": price = counts * 0.90;
                console.log (price.toFixed(2));
                break;
                case "grapefruit": price = counts * 1.60;
                console.log (price.toFixed(2));
                break;
                case "kiwi": price = counts * 3.00; 
                console.log (price.toFixed(2));
                break;
                case "pineapple": price = counts * 5.60;
                console.log (price.toFixed(2));
                break;
                case "grapes": price = counts * 4.20;
                console.log (price.toFixed(2));
                break;

                default:
                     console.log("error");
                     break;
            }
            break;
            
     default: console.log("error");
     break;       
    }
}

fruitShop (["apple","Workday","2"])
