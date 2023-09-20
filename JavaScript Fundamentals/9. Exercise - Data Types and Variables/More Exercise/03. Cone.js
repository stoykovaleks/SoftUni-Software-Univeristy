function cone(radius, height){
    console.log(`Volume = ${((Math.PI * radius * radius) / 3 * height).toFixed(4)}`);
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let area = Math.PI * radius * (radius + slantHeight);

    console.log(`area =  ${area.toFixed(4)} `);
}

cone (3, 5)