function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);

}

gcd(2154, 458)