function catFood(input) {
    let catsCount = Number(input[0]);

    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let foodCount = 0;
    let foodPrice = 0;

    for (let index = 1; index <= catsCount; index++) {
        let gramsFood = Number(input[index]);

        foodCount += gramsFood;

        if (100 <= gramsFood && gramsFood < 200) {
            groupOne++;
        }
        else if (200 <= gramsFood && gramsFood < 300) {
            groupTwo++;
        }
        else if (300 <= gramsFood && gramsFood < 400) {
            groupThree++;
        }
    }
    console.log(`Group 1: ${groupOne} cats.`);
    console.log(`Group 2: ${groupTwo} cats.`);
    console.log(`Group 3: ${groupThree} cats.`);

    foodPrice = (foodCount / 1000) * 12.45;
    console.log(`Price for food per day: ${foodPrice.toFixed(2)} lv.`);
}

catFood(["10","256", "348", "198", "322", "186", "294", "321", "100", "200", "300"])