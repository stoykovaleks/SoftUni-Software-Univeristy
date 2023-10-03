function townsToJSON(input){
    let heading = input[0].split("|").map((heading) => heading.trim());
    let result = [];

    for (const data of input) {
        let [town, latitude, longitude] = data.split("|");
        console.log(town);
    }
}

townsToJSON([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)