function twons(array) {
    for (const townInfo of array) {
        let [town, latitude, longitude] = townInfo.split(" | ");

        let obj = {
            Town: town,
            Latitude: Number(latitude).toFixed(2),
            Longitude: Number(longitude).toFixed(2)
        };
        console.log(`{ town: '${obj.Town}', latitude: '${obj.Latitude}', longitude: '${obj.Longitude}' }`);
    }
}

twons(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])