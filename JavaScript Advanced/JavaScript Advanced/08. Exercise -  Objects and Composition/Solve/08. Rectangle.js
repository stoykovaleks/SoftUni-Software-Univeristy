function rectangle(width, height, color){
    return {
        width: Number(width),
        height: Number(height),
        color: color,

        calcArea(){
            let result = width * height
            return result;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

rectangle()