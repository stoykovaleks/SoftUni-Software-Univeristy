function cookingByNumbers(num, a, b, c, d, e) {
    num = Number(num);
    let arr = [a, b, c, d, e];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.80; break;
        }
        console.log(num);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')