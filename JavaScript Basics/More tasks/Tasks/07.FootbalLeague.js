function football(input) {

    let staionCapacity = Number(input.shift());
    let fansCount = Number(input.shift());

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;


    for (let i = 0; i <= fansCount; i++) {

        let sector = String(input[i]);

        switch (sector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }

    }
    console.log(`${(sectorA / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorB / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorV / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorG / fansCount * 100).toFixed(2)}%`);
    console.log(`${(fansCount / staionCapacity * 100).toFixed(2)}%`);

}

football(["75", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])