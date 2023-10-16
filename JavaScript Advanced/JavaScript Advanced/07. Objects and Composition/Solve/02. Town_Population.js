function townPopulation(array) {
    let towns = {};

    for (const data of array) {
        let [town, townPopulation] = data.split(" <-> ");
        let population = Number(townPopulation);

        if (towns.hasOwnProperty(town)) {
            towns[town] += population
        }
        else {
            towns[town] = population;
        }
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)