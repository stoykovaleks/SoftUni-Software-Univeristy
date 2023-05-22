function spaceship(input) {
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let higth = Number(input[2]);
    let middleHughtOfAstronaut = Number(input[3]);

    let spaceshipVolume = width * lenght * higth;
    let volumePerRoom = (middleHughtOfAstronaut + 0.40) * 2 * 2;
    let totalSpace = Math.floor(spaceshipVolume / volumePerRoom);

    if (3 <= totalSpace && totalSpace <= 10) {
        console.log(`The spacecraft holds ${totalSpace} astronauts.`);
    }
    else if (totalSpace < 3) {
        console.log("The spacecraft is too small.");
    }
    else if (totalSpace > 10) {
        console.log("The spacecraft is too big.");
    }
}

spaceship(["4.5", "4.8", "5", "1.75"])