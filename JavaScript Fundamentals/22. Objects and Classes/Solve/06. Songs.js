function printSongNames(songData) {
  let songCount = parseInt(songData[0]);
  let songs = [];
class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  
  
    for (let i = 1; i <= songCount; i++) {
      let songInfo = songData[i].split('_');
      let typeList = songInfo[0];
      let name = songInfo[1];
      let time = songInfo[2];
      songs.push(new Song(typeList, name, time));
    }
  
    let typeListParam = songData[songData.length - 1];
  
    songs.forEach(song => {
      if (typeListParam === 'all' || song.typeList === typeListParam) {
        console.log(song.name);
      }
    });
  }
  let songData = [
    '3',
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
  ];
  printSongNames(songData);
  