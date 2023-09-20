function experienceGaining(input) {
    let targetExperience = Number(input[0]);
    let battlesCount = Number(input[1]);
    let battleExperience = input.slice(2).map(Number);

    let xp = 0;
    let battles = 0;

    for (let index = 0; index < battlesCount; index++) {
        let current = battleExperience[index];

        if ((battles + 1) % 3 === 0) {
            current += current * 0.15;
        }
        if ((battles + 1) % 5 === 0) {
            current -= current * 0.1;
        }
        if ((battles + 1) % 15 === 0) {
            current += current * 0.05;
        }
        xp += current;
        battles++;

        if (xp >= targetExperience) {
            break;
        }
    }

    if (xp >= targetExperience) {
        console.log(`Player successfully collected his needed experience for ${battles} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(targetExperience - xp).toFixed(2)} more needed.`);
    }
}
experienceGaining((["500", "5", "50", "100", "200", "100", "30"]))