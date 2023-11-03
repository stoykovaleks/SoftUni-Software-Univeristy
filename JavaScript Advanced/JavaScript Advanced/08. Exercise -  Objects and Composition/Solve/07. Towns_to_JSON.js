function townsToJSON(input){
    const towns = [];

    for (let i = 1; i < input.length; i++) {
        const tokens = input[i].split(/\s*|\s*/g);
        const town = tokens[1];

        const latitude = Number(tokens[2]).toFixed(2);
        const longitude = Number(tokens[3]).toFixed(2);
        const currObj = {
            Town: town,
            Latitude: Number(latitude).toFixed(2),
            Longitude: Number(longitude).toFixed(2),
        }
        towns.push(currObj);
    }
    console.log(JSON.stringify(towns));
}

townsToJSON([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)