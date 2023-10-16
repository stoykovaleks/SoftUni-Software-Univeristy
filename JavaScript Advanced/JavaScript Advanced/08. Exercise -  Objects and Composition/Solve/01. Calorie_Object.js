function calorieObj(array) {
    let obj = {};

    for (let i = 0; i < array.length; i += 2) {
        let key = array[i];
        let value = Number(array[i + 1]);
        obj[key] = value;
    }
    console.log(obj);
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])