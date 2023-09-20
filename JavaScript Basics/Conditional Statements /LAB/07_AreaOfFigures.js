function areaOfFigures (input){
    let figureType = input[0];
    let a = Number (input[1]);
    let b = Number (input[2]);
    let result = 0;
    
    if (figureType == 'square'){
        
        let result = a * a;
        console.log(result.toFixed(3));
    }
    else if (figureType == 'rectangle'){

        let result = a * b;
        console.log(result.toFixed(3));
    }
    else if (figureType == 'circle'){

        let result = Math.PI * a * a
        console.log(result.toFixed(3));

    }
    else if (figureType == 'triangle'){
        
        let result = a * b / 2;
        console.log(result.toFixed(3));
    }
}

areaOfFigures (["triangle", "5", "4,5"])