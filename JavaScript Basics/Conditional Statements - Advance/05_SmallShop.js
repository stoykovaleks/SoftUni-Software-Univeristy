function smallShop (input){
    let product = input[0];
    let town = input[1];
    let count = input[2];

    let price = 0.0;

    switch (town){

        case "Sofia":
            if (product == "coffee"){
                price = count * 0.50;
            }
            else if (product == "water"){
                price = count * 0.80;
            }
            else if (product == "beer"){
                price = count * 1.20;
            }
            else if (product == "sweets"){
                price = count * 1.45;
            }
            else if (product == "peanuts"){
                price = count * 1.60;
            }
            break;

             case "Plovdiv": 
             if (product == "coffee"){
              price = count * 0.40;
                }
             else if (product == "water"){
                price = count * 0.70;
                }   
             else if (product == "beer"){
                price = count * 1.15;
                }
            else if (product == "sweets"){
                price = count * 1.30;
                }
            else if (product == "peanuts"){
                price = count * 1.50;
                }
            break;

            case "Varna":
                if (product == "coffee"){
                    price = count * 0.45;
                }
                else if (product == "water"){
                    price = count * 0.70;
                }
                else if (product == "beer"){
                    price = count * 1.10;
                }
                else if (product == "sweets"){
                    price = count * 1.35;
                }
                else if (product == "peanuts"){
                    price = count * 1.55;
                }
                break;
    }
    console.log (price);
}

smallShop (["coffee","Varna","2"])
