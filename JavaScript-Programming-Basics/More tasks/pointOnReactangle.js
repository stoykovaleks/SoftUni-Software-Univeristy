function pointOnReactangle (input){
    let x1 = Number (input[0]);
    let y1 = Number (input[1]);
    let x2 = Number (input[2]);
    let y2 = Number (input[3]);
    let x = Number (input[4]);
    let y = Number (input[5]);

    if (x == x1 || x == x2){
        if (y >= y1 && y <= y2){
            console.log ("Border");
        }

    }
    if (y == y1 || y == y2){
        if (x >= x1 && x <= x2){
            console.log ("Border");
        }
    }
    console.log ("Inside / Outside")
}

pointOnReactangle (["2", "-3", "12", "3", "8", "-1"])