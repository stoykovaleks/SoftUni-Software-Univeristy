function solve(area, vol, str) {
    str = JSON.parse(str);
    let result = [];

    for (const entry of str) {
        let calculated = area.call(entry);
        let calculatedVol = vol.call(entry);

        result.push({
            area: calculated,
            volume: calculatedVol,
        })
    }
    
    let area = function area() {
        return Math.abs(this.x * this.y);
    }
    let vol = function vol() {
        return Math.abs(this.x * this.y * this.z);
    }
    console.log(JSON.stringify(result));
}

solve(`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)