function meetings(array) {
    let meeting = {};
  
    for (let data of array) {
      let [day, name] = data.split(' ');
  
      if (meeting.hasOwnProperty(day)) {
        console.log(`Conflict on ${day}!`);
      } else {
        meeting[day] = name;
        console.log(`Scheduled for ${day}`);
      }
    }
    for (const key in meeting) {
       console.log(`${key} -> ${meeting[key]}`);
    }
  }

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])