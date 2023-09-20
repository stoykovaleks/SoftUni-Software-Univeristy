function petShop(input){
    let countsDogFood = Number(input[0]);
    let countsCatFood = Number(input[1]);
    let totalSum = (countsDogFood * 2.50)+(countsCatFood*4);
    console.log(`${totalSum}.lv`);
}

petShop(['5', '4']);