function centuriesToMinutes (centuries){
    let year = centuries * 100;
    let day = Math.trunc(year * 365.2422);
    let hour = day * 24;
    let minutes = hour * 60;

    console.log(`${centuries} centuries = ${year} years = ${day} days = ${hour} hours = ${minutes} minutes`);
}

centuriesToMinutes(1)