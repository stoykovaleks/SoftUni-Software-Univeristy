function gramophone (bandName, albumName, songName){
    let time = (albumName.length * bandName.length) * songName.length / 2
    let rotated = time/2.5;
    console.log(`The plate was rotated ${Math.ceil(rotated)} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')